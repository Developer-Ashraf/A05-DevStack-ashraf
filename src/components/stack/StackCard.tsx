
import type { ITechStack } from '../../types/StackType';

interface StackCardProps {
    stack: ITechStack;
    cartStacks: ITechStack[];
    handleCartUpdate: (stack: ITechStack) => void;
}

const StackCard = ({ stack, cartStacks, handleCartUpdate }: StackCardProps) => {

    const isStackCard = cartStacks.some((item) => item.id === stack.id);

    const handleStackCard = () => {
        handleCartUpdate(stack);
    };

    return (
        <div className={`bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex flex-col justify-between ${isStackCard ? 'border-purple-400' : ''
            }`}>
            <div>
                <div className="flex justify-between items-center mb-3">
                    <img
                        src={stack.icon}
                        alt={stack.name}
                        className="w-8 h-8 object-contain"
                    />
                    <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-md font-medium">
                        {stack.badge}
                    </span>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-1">
                    {stack.name}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                    {stack.description}
                </p>
            </div>

            <div>
                <div className="flex justify-between items-center text-xs text-gray-500 mb-4 border-t border-gray-100 pt-3">
                    <div className="flex gap-2">
                        <span className="bg-gray-100 px-2 py-1 rounded">
                            {stack.category}
                        </span>
                        <span className="bg-gray-100 px-2 py-1 rounded">
                            {stack.difficulty}
                        </span>
                    </div>
                    <div className="font-semibold text-gray-700">
                        {stack.rating}
                    </div>
                </div>

                <button
                    className={`w-full py-2 rounded-lg text-xs font-semibold transition ${isStackCard === true
                            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                            : 'bg-black text-white hover:bg-gray-800'
                        }`}
                    onClick={handleStackCard}
                    disabled={isStackCard}
                >
                    {isStackCard === true ? '✓ Added to Stack' : 'Add to Stack'}
                </button>
            </div>
        </div>
    );
};

export default StackCard;