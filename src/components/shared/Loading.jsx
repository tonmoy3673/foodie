

const Loading = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="spinner-border animate-spin inline-block w-16 h-16 border-4 border-b-blue-800 rounded-full" role="status">
                <span className="visually-hidden"></span>
            </div>
        </div>
    );
};

export default Loading;