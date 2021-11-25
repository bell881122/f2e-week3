// Custom
import BusList from 'src/components/BusList';
import BusInfo from 'src/components/BusInfo';
//--------------------
export default function BusSection({ busList, busInfo, setbusInfo }) {
    return (
        <div style={{ position: 'absolute', top: 8, right: 8, zIndex: 401, height: 'calc(100% - 32px)' }}>
            {busInfo !== undefined ? <BusInfo busInfo={busInfo} setbusInfo={setbusInfo} />
                : busList !== undefined ? <BusList list={busList} setbusInfo={setbusInfo} />
                    : null}
        </div >
    )
}