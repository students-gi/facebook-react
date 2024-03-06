import React from 'react';

const MealsContext = React.createContext<string[] | null>(null);
const mealsList = [
    "French Fries",
    "Mashed potatoes",
    "Potato chips"
]

function MealsProvider({ children }: { children: React.ReactNode }) {
    const [meals, setMeals] = React.useState(mealsList);

    return (
        <MealsContext.Provider value={meals}>
            {children}
        </MealsContext.Provider>
    );
}

export const useMealsContext = () => React.useContext(MealsContext);
export default MealsProvider;
