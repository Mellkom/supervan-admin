import crossIcon from '../../assets/images/icons/cards/cross-icon.svg';
import GEELYimg from '../../assets/images/image/populars_cars/admin_GEELY.png';

function ProductModal() {
    return (
        <section className="product-modal">
            <div className="product-back">
                <div className='product-header'>
                    <img src={crossIcon} alt="exit-button" />
                    <div className="product-title-main text-heading-lg">Внесите изменения</div>
                </div>
                <div className="product-main">
                    <div className='image-place'>
                        <img src={GEELYimg} alt="image-switch" />
                        <button className='image-switch-btn text-body-md'>Изменить картинку</button>
                    </div>
                    <div className='product-main-info'>
                        <div className="block-p">
                            <span className='text-body-lg'>Название авто</span>
                            <input className='text-body-md' type="text" placeholder='Введите название' />
                        </div>
                        <div className="block-p">
                            <span className='text-body-lg'>Категория авто</span>
                            <select name="car-category" id="car-category">
                                <option value="cargo">грузовой</option>
                                <option value="passenger">пассажирский</option>
                                <option value="cargo-passenger">грузо-пассажирский</option>
                            </select>
                        </div>
                        <div className="block-p">
                            <span className='text-body-lg'>Цена авто</span>
                            <input className='text-body-md' type="text" placeholder='Введите цену' />
                        </div>
                    </div>
                </div>
                <div className='product-sub-info'>
                    <div className='info-text'>
                        <div className="product-title text-heading-lg">Внесите изменения</div>
                    </div>
                    <div className='category-block'>
                        <div className='one-categoty'>
                            <span className='text-body-lg'>Габариты</span>
                            <div className='category-input'>
                                <input type="text" placeholder='Введите длину' />
                                <input type="text" placeholder='Введите ширину' />
                                <input type="text" placeholder='Введите высоту' />
                            </div>
                        </div>
                        <span className='spanned-category'>
                            <div className='one-categoty'>
                                <span className='text-body-lg'>Объем кузова</span>
                                <div className='category-input-n'>
                                    <input type="text" placeholder='Введите объем кузова' />
                                </div>
                            </div>
                            <div className='one-categoty'>
                                <span className='text-body-lg'>Грузоподъемность</span>
                                <div className='category-input-n'>
                                    <input type="text" placeholder='Введите грузоподъемность' />
                                </div>
                            </div>
                        </span>
                        <span className='spanned-category2'>
                            <div className='one-categoty'>
                                <span className='text-body-lg'>Сидячие места</span>
                                <div className='category-input'>
                                    <input type="text" placeholder='Количество мест' />
                                </div>
                            </div>
                            <div className='one-categoty'>
                                <span className='text-body-lg'>Объем батареи</span>
                                <div className='category-input'>
                                    <input type="text" placeholder='Введите объем' />
                                </div>
                            </div>
                            <div className='one-categoty'>
                                <span className='text-body-lg'>Запас хода</span>
                                <div className='category-input'>
                                    <input type="text" placeholder='Запас хода' />
                                </div>
                            </div>
                        </span>
                    </div>
                    <div className='info-text'>
                        <div className="product-title text-heading-lg">Конфигурация</div>
                    </div>
                    <div className='configuration-block'>
                        <div className='one-configuration'>
                            <span className='text-body-lg'>Сферы использования</span>
                            <div className='buttons-bar'>
                                <button>Ремонт и строительство</button>
                                <button>Аренда</button>
                                <button>Логистика</button>
                                <button>Туризм</button>
                            </div>
                        </div>
                        <div className='one-configuration'>
                            <span className='text-body-lg'>Вид батареи</span>
                            <div className='buttons-bar'>
                                <button>Быстрая</button>
                                <button>Медленная</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='final-button'>
                    <button>Удалить авто</button>
                    <button>Сохранить результаты</button>
                </div>
            </div>
        </section>
    )
}

export default ProductModal;