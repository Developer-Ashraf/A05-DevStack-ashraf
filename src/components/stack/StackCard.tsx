import React, { use } from 'react';

const StackCard = ({StackPromise}) => {
    // console.log(StackPromise);
    const stacks = use(StackPromise)
    console.log(stacks)
    return (
        <div>
            This is our stack card
        </div>
    );
};

export default StackCard;