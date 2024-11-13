**HelloWorld.vue**
A simple placeholder component used when starting new Vue projects. Adds no functionality to the linear optimization calculator. A demo component or for initial testing of Vue setup, showing how reactivity works with Vue (with the count increment button). I will remove this eventually.

**Home.vue**
A file defining a Home page for this application, displaying an introduction or welcoming message to users who land on the app. It serves the purpose of introducing the application: a Linear Optimization Calculator. The landing page of the app.

Styling: Basic CSS is applied for padding and aligning the content centrally.

**LinearOptimizationForm.vue**
A component which is the core form allowing users to input data.

Matrix A, Vector B, Vector C Inputs: Users enter the data for matrices and vectors, which are parsed as JSON input. These are the core data points needed for the optimization algorithm.
Submit Button: Triggers the calculation by dispatching an action to the Vuex store (submitForm method). The form prevents the default submission behavior (@submit.prevent="submitForm").
Result Display: After calculation, the results are displayed. The v-if="optimizationResult" ensures the results are shown only when available.
