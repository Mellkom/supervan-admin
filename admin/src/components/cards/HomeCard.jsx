import GEELYimg from '../../assets/images/image/populars_cars/admin_GEELY.png';
import tengeIcon from '../../assets/images/icons/homepage/tengeDark-icon.svg';
import peopleIcon from '../../assets/images/icons/cards/peoples-icon.svg';
import batteryIcon from '../../assets/images/icons/cards/battery-icon.svg';
import mapIcon from '../../assets/images/icons/cards/map-icon.svg';
import boxIcon from '../../assets/images/icons/cards/box-icon.svg';


function HomeCard() {

    return(
        <>
        <div className="card-back">
            <img src={GEELYimg} alt="admin-geely" />
            <div className='hcard-title text-heading-lg'>Geely Farizon SuperVan</div>
            <div className='hcard-text text-body-md'>
                <span className="groupe-text">Грузо-пассажирская</span>
                <span className='text-body-lg'>12.000.000 <img src={tengeIcon} alt="tenge-icon" /> </span>
            </div>
            <div className='card-about'>
                <span>
                    <img src={peopleIcon} alt='peopleIcon'/> 10
                </span>
                <span>
                    <img src={batteryIcon} alt='batteryIcon'/> 83кВт*ч
                </span>
                <span>
                    <img src={mapIcon} alt='mapIcon'/> 450км
                </span>
                <span>
                    <img src={boxIcon} alt='boxIcon'/> 9,39m³
                </span>
            </div>

        </div>
        <div className="card-back">
            <img src={GEELYimg} alt="admin-geely" />
            <div className='hcard-title text-heading-lg'>Geely Farizon SuperVan</div>
            <div className='hcard-text text-body-md'>
                <span className="groupe-text">Грузо-пассажирская</span>
                <span className='text-body-lg'>12.000.000 <img src={tengeIcon} alt="tenge-icon" /> </span>
            </div>
            <div className='card-about'>
                <span>
                    <img src={peopleIcon} alt='peopleIcon'/> 10
                </span>
                <span>
                    <img src={batteryIcon} alt='batteryIcon'/> 83кВт*ч
                </span>
                <span>
                    <img src={mapIcon} alt='mapIcon'/> 450км
                </span>
                <span>
                    <img src={boxIcon} alt='boxIcon'/> 9,39m³
                </span>
            </div>

        </div>
        <div className="card-back">
            <img src={GEELYimg} alt="admin-geely" />
            <div className='hcard-title text-heading-lg'>Geely Farizon SuperVan</div>
            <div className='hcard-text text-body-md'>
                <span className="groupe-text">Грузо-пассажирская</span>
                <span className='text-body-lg'>12.000.000 <img src={tengeIcon} alt="tenge-icon" /> </span>
            </div>
            <div className='card-about'>
                <span>
                    <img src={peopleIcon} alt='peopleIcon'/> 10
                </span>
                <span>
                    <img src={batteryIcon} alt='batteryIcon'/> 83кВт*ч
                </span>
                <span>
                    <img src={mapIcon} alt='mapIcon'/> 450км
                </span>
                <span>
                    <img src={boxIcon} alt='boxIcon'/> 9,39m³
                </span>
            </div>

        </div>
        </>
    )
}

export default HomeCard;