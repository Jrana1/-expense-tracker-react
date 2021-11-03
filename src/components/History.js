import SingleHistory from "./SingleHistory";

const History = ({ history, setAllInfo }) => {
    console.log(history);
    return (
        <div>
            <h2>History</h2>
            <hr />
            {history.map(itm => <SingleHistory key={itm.id} item={itm} setAllInfo={setAllInfo} history={history}></SingleHistory>)}
        </div>
    );
};

export default History;