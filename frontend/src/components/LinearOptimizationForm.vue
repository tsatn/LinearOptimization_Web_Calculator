<template>
  <div class="container flex justify-center items-center min-h-screen p-6">
    <div class="bg-[#F7F5EB] p-8 rounded-lg shadow-lg max-w-lg w-full">
      <h2 class="text-3xl font-bold text-center text-[#374259] mb-6 font-playfair">Linear Optimization Calculator</h2>
      <form @submit.prevent="submitForm" class="space-y-6" style="position: relative; flex-direction: column; align-items: center; justify-content: center;">
        <div class="form-group">
          <label for="A" class="block text-[#545B77] mb-2 font-sourceSans">Matrix A:</label>
          <textarea id="A" v-model="A" rows="4" placeholder="Example: [[1, 2, 3], [0, 1, 4], [5, 6, 0]]" class="form-control" required></textarea>
        </div>
        <div class="form-group">
          <label for="B" class="block text-[#545B77] mb-2 font-sourceSans">Vector B:</label>
          <input id="B" v-model="B" type="text" placeholder="Example:[7, 8, 9]" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="C" class="block text-[#545B77] mb-2 font-sourceSans">Vector C:</label>
          <input id="C" v-model="C" type="text" placeholder="Example: [10, 11, 12]" class="form-control" required />
        </div>
        <div class="flex justify-center">
          <button type="submit" class="btn-primary" :disabled="loading">
            {{ loading ? 'Calculating...' : 'Calculate' }}
          </button>
        </div>
      </form>
      <div v-if="result" class="mt-6 bg-[#D1E9F6] p-4 rounded-md" style="position: relative;">
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 100%; text-align: center;">
          <h3 class="text-lg font-semibold text-[#374259]">Result:</h3>
          <pre class="text-sm text-[#545B77]">{{ JSON.stringify(result, null, 2) }}</pre>
        </div>
      </div>
      <div v-if="error" class="mt-6 text-[#EED3D9]" style="position: relative;">
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 100%; text-align: center;">
          <p><strong>Error:</strong> {{ error }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const A = ref('');
    const B = ref('');
    const C = ref('');
    const result = ref(null);
    const loading = ref(false);
    const error = ref(null);

    const submitForm = async () => {
      try {
        loading.value = true;
        error.value = null;
        const response = await axios.post('/api/simplexLP', {
          A: JSON.parse(A.value),
          B: JSON.parse(B.value),
          C: JSON.parse(C.value)
        });
        result.value = response.data;
      } catch (err) {
        error.value = err.response?.data?.message || 'An error occurred';
      } finally {
        loading.value = false;
      }
    };

    return { A, B, C, result, loading, error, submitForm };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Source+Sans+Pro:wght@300;400;600;700&display=swap');

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #EAE0DA;
}

.form-group {
  background-color: #F2D8D8;
  border-radius: 16px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: transform 200ms, box-shadow 200ms;
}

.form-group:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
}

.form-control {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #A0C3D2;
  border-radius: 0;
  margin-bottom: 1rem;
  font-size: 1rem;
  background-color: #F7F5EB;
  font-family: 'Source Sans Pro', sans-serif;
  transition: border-color 200ms;
}

.form-control:focus {
  border-color: #5C8984;
  outline: none;
}

.btn-primary {
  width: 100%; /* Added to make the button fill the entire form width */
  background-color: #5C8984;
  color: #F7F5EB;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-size: 1rem;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  transition: all 200ms;
}

.btn-primary:hover {
  background-color: #374259;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.btn-primary:disabled {
  background-color: #B5C0D0;
  cursor: not-allowed;
  transform: none;
}

.font-playfair {
  font-family: 'Playfair Display', serif;
}

.font-sourceSans {
  font-family: 'Source Sans Pro', sans-serif;
}
</style>
