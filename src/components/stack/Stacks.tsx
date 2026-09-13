import { use, useState } from 'react';
import type { ITechStack } from '../../types/StackType';
import StackCard from './StackCard';
import SelectedStack from './SelectedStack';
import { toast } from "react-toastify";

interface StackProps {
    stackPromise: Promise<ITechStack[]>;
}

const Stacks = ({ stackPromise }: StackProps) => {

    const stacks = use(stackPromise);

    const [cartStacks, setCartStacks] = useState<ITechStack[]>([]);

    
    const handleCartUpdate = (stack: ITechStack): void => {
        const existingStack = cartStacks.find((item) => item.id === stack.id);

        if (existingStack) {
            const updatedCart = cartStacks.filter((item) => item.id !== stack.id);
            setCartStacks(updatedCart);
            toast.error(`${stack.name} removed from your stack`);
        } else {
            const updatedCart = [...cartStacks, stack];
            setCartStacks(updatedCart);
            toast.success(`${stack.name} added to your stack`);
        }
    };

    
    const handleRemoveItem = (id: string | number): void => {

        const itemToRemove = cartStacks.find((item) => item.id === id);

        const updatedCart = cartStacks.filter((item) => item.id !== id);
        setCartStacks(updatedCart);

        if (itemToRemove) {
            toast.error(`${itemToRemove.name} removed from your stack`);
        }
    };

    
    const handleRemoveAll = (): void => {
        setCartStacks([]);
        toast.error('All technologies removed from your stack');
    };

    return (
        <div className="flex flex-col gap-4 py-10 md:py-16 px-4">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold">
                    Explore the{' '}
                    <span className="bg-gradient-to-r from-[#D946EF] to-[#8B5CF6] bg-clip-text text-transparent">
                        Technologies
                    </span>
                </h2>
                <p className="text-gray-500 mt-1">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            <div className="container mx-auto flex flex-col md:flex-row justify-between gap-6">
                {/* Left Grid Section */}
                <div className="w-full md:w-[75%] grid grid-cols-1 md:grid-cols-3 gap-4">
                    {stacks.map((stack: ITechStack, ind: number) => (
                        <StackCard
                            key={ind}
                            stack={stack}
                            cartStacks={cartStacks}
                            handleCartUpdate={handleCartUpdate}
                        />
                    ))}
                </div>

                
                <div className="w-full md:w-[25%]">
                    <SelectedStack
                        cartStacks={cartStacks}
                        handleRemoveItem={handleRemoveItem}
                        handleRemoveAll={handleRemoveAll}
                    />
                </div>
            </div>
        </div>
    );
};

export default Stacks;