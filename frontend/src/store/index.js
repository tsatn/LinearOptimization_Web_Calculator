import { createStore } from 'vuex';
import gql from 'graphql-tag';
import apolloClient from '@/apollo';    // Apollo client setup
import { auth } from '@/firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

// src/store/index.js sets up Vuex for managing application state:
export default createStore({
  state: {
    optimizationResult: null,           // Linear optimization result
    nonLinearOptimizationResult: null,  // Non-Linear optimization result
    user: null, // For authentication
  },
  mutations: {
    setOptimizationResult(state, result) {
      state.optimizationResult = result;
    },
    setNonLinearOptimizationResult(state, result) {
      state.nonLinearOptimizationResult = result;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {

    // LINEAR -----
    // Action for GraphQL-based optimization calculation
    async calculateOptimization({ commit }, { A, B, C }) {
      const query = gql`
        mutation CalculateOptimization($A: [[Float]], $B: [Float], $C: [Float]) {
          calculateOptimization(A: $A, B: $B, C: $C) {
            optimal
            slack
            value
          }
        }
      `;
      try {
        const { data } = await apolloClient.mutate({
          mutation: query,
          variables: { A, B, C },
        });
        commit('setOptimizationResult', data.calculateOptimization);
      } catch (error) {
        console.error('Error during GraphQL mutation:', error);
      }
    },

    // Action for REST API-based optimization calculation (fallback)
    async calculateOptimizationRest({ commit }, { A, B, C }) {
      try {
        const response = await fetch('http://localhost:3001/api/calculate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ A, B, C }),
        });
        const data = await response.json();
        commit('setOptimizationResult', data);
      } catch (error) {
        console.error('Error during REST API request:', error);
      }
    },


    // NONLINEAR -----
    // Action for GraphQL-based non-linear optimization calculation
    async calculateNonLinearOptimization({ commit }, { X, Y }) {
      const query = gql`
        mutation CalculateNonLinearOptimization($X: [Float], $Y: [Float]) {
          calculateNonLinearOptimization(X: $X, Y: $Y) {
            optimal
            value
          }
        }
      `;
      try {
        const { data } = await apolloClient.mutate({
          mutation: query,
          variables: { X, Y },
        });
        commit('setNonLinearOptimizationResult', data.calculateNonLinearOptimization);
      } catch (error) {
        console.error('Error during GraphQL mutation for non-linear optimization:', error);
      }
    },

    // Action for REST API-based non-linear optimization calculation (fallback)
    async calculateNonLinearOptimizationRest({ commit }, { X, Y }) {
      try {
        const response = await fetch('http://localhost:3001/api/calculateNonLinear', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ X, Y }),
        });
        const data = await response.json();
        commit('setNonLinearOptimizationResult', data);
      } catch (error) {
        console.error('Error during REST API request for non-linear optimization:', error);
      }
    },


    // Action for user login using Firebase Authentication
    async login({ commit }, { email, password }) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        commit('setUser', userCredential.user);
      } catch (error) {
        console.error('Error during Firebase login:', error);
      }
    },

    // Action for user logout using Firebase Authentication
    async logout({ commit }) {
      try {
        await signOut(auth);
        commit('setUser', null);
      } catch (error) {
        console.error('Error during Firebase logout:', error);
      }
    },
  },
  getters: {
    optimizationResult: (state) => state.optimizationResult,
    nonLinearOptimizationResult: (state) => state.nonLinearOptimizationResult,
    isAuthenticated: (state) => !!state.user,
  },
});
