import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) { // Using shorthand method syntax
      return `$${income}`;
    },
    getIncomeInEuros(income) { // Using shorthand method syntax
      return `${income} euros`;
    },
  };

  return fullBudget;
}
