export const BookCard = () => {
    return (
        <div className="">
            <div className="mb-2 overflow-hidden">
                <img
                    src='https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg'
                    alt=""
                    className="rounded-2xl"
                />
            </div>
            <div className="">
                <h3 className="text-xl font-semibold">Harry Potter</h3>
                <div className="">
                    <span className="">Action</span>
                </div>
            </div>
        </div>
    );
}