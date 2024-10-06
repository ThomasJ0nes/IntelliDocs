function WelcomeHeader() {
    return (
        <div className="flex flex-col items-center justify-center">    
        <h1 className="text-2xl sm:text-4xl font-bold">
            Welcome to <span className="text-indigo-600 dark:text-indigo-400">IntelliDocs</span>
        </h1>
        <p className="text-sm sm:text-lg text-gray-700 dark:text-gray-300 mt-5">
        Navigate developer docs effortlessly to find the right solution fast.
        </p>
        </div>
    )
}

export default WelcomeHeader;
