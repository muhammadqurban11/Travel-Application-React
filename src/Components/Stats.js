export default function Stats({ items }) {

    if (!items.length) {
        return (
            <p className="stats">
                <em>Start adding some thing in the list🚀</em>
            </p>
        );
    }

    const numItems = items.length;
    const numPacked = items.filter(item => item.packed).length;

    const percentage = Math.round((numPacked / numItems) * 100);

    return (
        <footer className="stats">

            <em>
                {percentage === 100 ? 'You got Everything! Ready to go ✈' :
                    `💼 You have ${numItems} items on yourlist, and you already packed  (${percentage}%) ${numPacked}`};
            </em>
        </footer>
    );
}
