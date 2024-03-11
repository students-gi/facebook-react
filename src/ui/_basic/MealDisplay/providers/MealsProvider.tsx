import React from 'react';

const MealsContext = React.createContext<string[] | null>(null);
const mealsList = [
    "French Fries",
    "Mashed potatoes",
    "Potato chips"
]

type MealsProviderProps = {
    children: React.ReactNode
}

function MealsProvider({ children }: MealsProviderProps) {
    const [meals] = React.useState(mealsList);

    return (
        <MealsContext.Provider value={meals}>
            {children}
        </MealsContext.Provider>
    );
}

export const useMealsContext = () => React.useContext(MealsContext);
export default MealsProvider;
