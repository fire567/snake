import React, {useState} from "react";
import "./Scores.css"

const Scores = () => {
    const [results, setResults] = useState(JSON.parse(localStorage.getItem("result")) ? JSON.parse(localStorage.getItem("result")) : null)

    const deleteScoresHandler = () => {
        localStorage.clear();
        setResults(null);
    }

    const colNames = [
        {name: "Очки"},
        {name: "Дата"},
    ]

    return (
        <>
            <div className="scores-form">
                <table>
                    <thead>
                    <tr className="table-head">
                        {colNames.map((el) => (
                            <th>{el.name}</th>
                        ))}
                    </tr>
                    </thead>
                    {results ?
                    <tbody className="data">
                        {results.map((el) => (
                            <tr className="table-rows">
                                <td>{el.points}</td>
                                <td>{el.date}</td>
                            </tr>
                        ))}
                    </tbody> :
                    <tbody className="empty-data">
                        Нет рузультатов
                    </tbody>
                    }
                </table>
                <button className="delete-btn" onClick={deleteScoresHandler}>
                    Удалить
                </button>
            </div>
        </>
    )
}

export default Scores