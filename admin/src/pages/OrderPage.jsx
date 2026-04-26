import { useState } from "react";
import Paginator from "../components/main-comp/Paginator";


const orders = [
  { id: 1, client: "Ернар", phone: "+7 777 777 7777", date: "14.03.2025", status: "ожидает" },
  { id: 2, client: "Ернар", phone: "+7 777 777 7777", date: "14.03.2025", status: "оформлен" },
  { id: 3, client: "Ернар", phone: "+7 777 777 7777", date: "14.03.2025", status: "выполнен" },
  { id: 4, client: "Ернар", phone: "+7 777 777 7777", date: "14.03.2025", status: "ожидает" },
  { id: 5, client: "Ернар", phone: "+7 777 777 7777", date: "14.03.2025", status: "ожидает" },
  { id: 6, client: "Ернар", phone: "+7 777 777 7777", date: "14.03.2025", status: "выполнен" },
  { id: 7, client: "Ернар", phone: "+7 777 777 7777", date: "14.03.2025", status: "ожидает" },
  { id: 8, client: "Ернар", phone: "+7 777 777 7777", date: "14.03.2025", status: "оформлен" },
  { id: 9, client: "Ернар", phone: "+7 777 777 7777", date: "14.03.2025", status: "выполнен" },
  { id: 10, client: "Ернар", phone: "+7 777 777 7777", date: "14.03.2025", status: "ожидает" },
  { id: 11, client: "Ернар", phone: "+7 777 777 7777", date: "14.03.2025", status: "ожидает" },
  { id: 12, client: "Ернар", phone: "+7 777 777 7777", date: "14.03.2025", status: "выполнен" },
];

function OrderPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const getTotalPages = () => Math.ceil(orders.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const currentOrders = orders.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <section className="admin-section">
            <table className="order-table">
                <thead >
                    <tr>
                        <th className="text-body-lg">№ заказа</th>
                        <th className="text-body-lg">Имя клиента</th>
                        <th className="text-body-lg">Номер телефона</th>
                        <th className="text-body-lg">Дата получения заказа</th>
                        <th className="text-body-lg">Статус</th>
                    </tr>
                </thead>
                <tbody>
                    {currentOrders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.client}</td>
                            <td>{order.phone}</td>
                            <td>{order.date}</td>
                            <td>{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Paginator
                    totalPages={getTotalPages()}
                    currentPage={currentPage}
                    setCurrentPage={handlePageChange}
                />
            <div className="table-edit-block">
                <div className="edit-block">
                    <div className="order-input">
                        <div className="edit-title text-heading-lg">Номер заказа</div>
                        <input className="num-input text-body-md" type="text" placeholder="Введите номер заказа" />
                    </div>
                    <div className="order-status">
                        <div className="edit-title text-heading-lg">Укажите статус</div>
                        <span className="status-buttons">
                            <button className="status-button text-body-md">ожидает</button>
                            <button className="status-button text-body-md">оформление</button>
                            <button className="status-button text-body-md">выполнен</button>
                        </span>
                    </div>
                </div>
                <button className="accept-status">Подтвердить</button>
            </div>
        </section>
    )
}

export default OrderPage;