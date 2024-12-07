import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VulnerabilitiesTable = () => {
    const [vulnerabilities, setVulnerabilities] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/vulnerabilities')  // URL вашего API
            .then(response => {
                setVulnerabilities(response.data);
            })
            .catch(error => {
                console.error("Ошибка загрузки данных:", error);
            });
    }, []);

    return (
        <div>
            <h1>Список уязвимостей</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Название</th>
                        <th>Описание</th>
                        <th>Дата</th>
                        <th>Ссылка</th>
                    </tr>
                </thead>
                <tbody>
                    {vulnerabilities.map((vuln, index) => (
                        <tr key={index}>
                            <td>{vuln.id}</td>
                            <td>{vuln.title}</td>
                            <td>{vuln.description}</td>
                            <td>{vuln.date}</td>
                            <td><a href={vuln.link} target="_blank" rel="noreferrer">Источник</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VulnerabilitiesTable;
