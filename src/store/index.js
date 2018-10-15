import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store ({
  state: {
    calculation: '',
    runningTotal: '',
    calcWithoutLastOperator: '',
    calcWithoutNegative: '',
    lastOperator: '',
    negative: false,
    hasDecimal: false,
    hasNumber: false,
    clearNext: false,
  },

  actions: {
    addDecimal(context) {
      if (!context.state.hasDecimal)
      {
        context.commit("addNumber", '.');
        context.commit("hasDecimal");
      }
    },

    performOperation(context, operator) {
      const state = context.state
      if (state.calcWithoutLastOperator === '')
    	{
    		if (operator === '-'
          && state.lastOperator !== '-')
    		{
    			context.commit("toggleNegative");
    		}
    	}
      else if (operator === '=')
      {
        context.commit("equals", true);
      }
      else
    	{
    		context.commit("equals", false);
    		if (state.lastOperator === '')
    		{
    			context.commit("appendOperator", operator);
    		}
    		else
    		{
    			if (operator === '-')
    			{
    				context.commit("toggleNegative");
    			}
    			else
    			{
    				context.commit("appendOperator", operator);
    			}
    		}
    	}
    },

    addNumber(context, number) {
      if (context.state.clearNext)
      {
        context.commit("clear");
      }

      if (number === '0' && !context.state.hasNumber)
      {
        return;
      }
      context.commit("addNumber", number);
    }
  },

  mutations: {
    addNumber(state, number) {
      state.calculation += number;
      state.lastOperator = '';
      state.calcWithoutLastOperator = state.calculation;
      state.hasNumber = true;
    },

    hasDecimal(state) {
      state.hasDecimal = true;
    },

    toggleNegative(state) {
      if (state.negative)
      {
        state.calculation = state.calcWithoutNegative;
      }
      else
      {
        state.calcWithoutNegative = state.calculation;
        state.calculation += '-';
      }

      state.negative = !state.negative;
    },

    appendOperator(state, operator)
    {
    	state.calculation += operator;
    	state.lastOperator = operator;
    	state.calcWithoutNegative = state.calculation;
    	state.negative = false;
    	state.hasDecimal = false;
      state.hasNumber = false;
    },

    equals(state, confirmed)
    {
    	state.runningTotal = eval(state.calcWithoutLastOperator);
    	if (confirmed)
    	{
    		state.calculation = state.runningTotal;
    		state.runningTotal = '';
    		state.calcWithoutLastOperator = state.calculation;
    		state.calcWithoutNegative = state.runningTotal;
    		state.lastOperator = '';
    		state.negative = false;
    		state.hasDecimal = ('' + state.calculation).includes('.');
        state.hasNumber = true;
        state.clearNext = true;
    	}
    },

    clear(state) {
      state.calculation = '';
    	state.runningTotal = '';
    	state.calcWithoutLastOperator = '';
    	state.calcWithoutNegative = '';
    	state.lastOperator = '';
    	state.negative = false;
    	state.hasDecimal = false;
      state.hasNumber = false;
      state.clearNext = false;
    }
  }
})
