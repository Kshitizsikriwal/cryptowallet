import React from "react";

const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
    return (
        <div className="bg-[#181918] m-4 flex flex-1
            2xl:min-w-[450px]
            2xl:max-w-[500px]
            sm:min-w-[270px]
            sm:max-w-[300px]
            min-w-full
            flex-col p-3 rounded-md hover:shadow-2xl"
        >
            <div className="flex flex-col items-center w-full mt-3">
                <div className="display-flex justify-start w-full mb-6 p-2">
                    <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
                        <p className="text-white text-base">From: {addressFrom}</p>
                    </a>
                    <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
                        <p className="text-white text-base">To: {addressTo}</p>
                    </a>
                    <p className="text-white text-base">Amount: {amount} ETH</p>
                    {message && (
                        <>
                            <br />
                            <p className="text-white text-base">Message: {message}</p>
                        </>
                    )}
                </div>
                <img
                    src={url}
                    alt={keyword}
                    className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"
                />
                <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
                    <p className="text-[#37c7da] font-bold">{timestamp}</p>
                </div>
            </div>
        </div>
    );
};

const Transactions = () => {
    const fakeTransactions = [
        {
            addressTo: "0x1234...abcd",
            addressFrom: "0xabcd...1234",
            timestamp: "2024-05-30 14:35",
            message: "Payment for services",
            keyword: "services",
            amount: 0.5,
            url: "https://static.moneymade.io/cdn-cgi/image/width=688,quality=100,format=auto/https://static.moneymade.io/1_d7154e63d2/1_d7154e63d2.png"
        },
        {
            addressTo: "0x5678...efgh",
            addressFrom: "0xefgh...5678",
            timestamp: "2024-05-29 10:15",
            message: "Gift",
            keyword: "gift",
            amount: 1.0,
            url: "https://i.pinimg.com/736x/38/aa/39/38aa39ae59e0af0557a7aafb699c6b73.jpg"
        },
        {
            addressTo: "0x9101...ijkl",
            addressFrom: "0.ijkl...9101",
            timestamp: "2024-05-28 09:45",
            message: "hello ",
            keyword: "donation",
            amount: 0.3,
            url: "https://i.pinimg.com/originals/71/f4/d1/71f4d1c20c03b052a20158d6b8ecfc3f.png"
        }
    ];

    return (
        <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
            <div className="flex flex-row flex-wrap md:p-12 py-12 px-4">
                {fakeTransactions.length ? (
                    fakeTransactions.map((transaction, index) => (
                        <TransactionsCard key={index} {...transaction} />
                    ))
                ) : (
                    <p className="text-white">No transactions found</p>
                )}
            </div>
        </div>
    );
};

export default Transactions;
