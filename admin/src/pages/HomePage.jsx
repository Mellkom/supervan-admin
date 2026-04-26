import phoneIcon from '../assets/images/icons/homepage/phone-icon.svg';
import mailIcon from '../assets/images/icons/homepage/mail-icon.svg';
import whatsappIcon from '../assets/images/icons/homepage/whatsapp-acicon.svg';
import telegramIcon from '../assets/images/icons/homepage/telegram-acicon.svg';
import HomeCard from '../components/cards/HomeCard';


function HomePage() {
    return(
        <section className="admin-section">
            <div className='home-block'>
                <div className='home-title text-heading-lg'>Популярные модели на сайте</div>
                <div className='home-cards'>
                    <HomeCard />
                </div>
            </div>
            <div className="feedback-block">
                <div className="feed-title text-heading-xl">Актуальная информация на сайте</div>
                <div className="contact-card text-body-lg">
                    <div>
                        <span> <img src={phoneIcon} alt="phoneIcon" />Номер телефона</span>
                        <input type="text" className='home-input text-caption' placeholder='+7 777 777 77 77' />
                    </div>
                    <div>
                        <span> <img src={whatsappIcon} alt="phoneIcon" />Ссылка на Whatsapp</span>
                        <input type="text" className='home-input text-caption' placeholder='https://whatsapp.com/' />
                    </div>
                    <div>
                        <span> <img src={mailIcon} alt="phoneIcon" />Почта компании</span>
                        <input type="text" className='home-input text-caption' placeholder='info@electrovan.kz' />
                    </div>
                    <div>  
                        <span> <img src={telegramIcon} alt="phoneIcon" />Ссылка на Telegram</span>
                        <input type="text" className='home-input text-caption' placeholder='https://telegram.com/' />
                    </div>
                </div>
                <button className='feed-button text-body-lg'>Обновить информацию</button>
            </div>
        </section>
    )
}

export default HomePage;