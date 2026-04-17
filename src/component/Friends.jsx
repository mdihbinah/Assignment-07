import Friend from "./Friend";

const Friends = async () => {
    const res = await fetch("/friends.json", {cache: "no-store"});
    const friends = await res.json()
    console.log(friends);
    return (
        <div className="space-y-3 mb-5">
            <h2>Your Friends</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;