/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface User {
    name: string;
    price: number;
    img: string;
    id: string;
}

const Fruits = () => {
    const [fruits, setFruits] = useState<User[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://6782675cc51d092c3dcf5eae.mockapi.io/test");
                const data = await response.json();
                setFruits(data);
            } catch (error) {
                console.log("Something went wrong", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {/* <h1>Fruits</h1> */}
            <div className="grid grid-cols-3 gap-6 p-4">
    {fruits.map((fruit) => (
        <div
            key={fruit.id}
            className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md shadow-red-800 p-4"
        >
            <Image
                src={fruit.img}
                alt={fruit.name}
                className="w-80 h-80 object-cover rounded-md mb-4"
                width={320}
                height={320}
                unoptimized={true}
            />
            <h2 className="text-lg font-semibold text-gray-800">{fruit.name}</h2>
            <p className="text-gray-600">Price: ${fruit.price}</p>
        </div>
    ))}
</div>

        </div>
    );
};

export default Fruits;
