import { useState } from "react";
import MenuSwipe from "../comps/MenuSwipe";
import InfoModal from "../comps/modals/InfoModal";
import MainTable from "../comps/MainTable";

const MainPage = () => {
    const [currentTable, setCurrentTable] = useState(0);
    const [infoModalId, setInfoModalId] = useState<number | null>(null);
    //@ts-ignore
    const nature:[[]] = window.__testable__.nature;
    //@ts-ignore
    const socium:[[]] = window.__testable__.socium;
    return(
        <div className="w-full h-full p-[32px]">
            {
                infoModalId!== null &&
                <InfoModal id={infoModalId} onClose={() => setInfoModalId(null)}/>
            }
            <div className="w-[1856px] h-[896px] overflow-scroll hide-scroll">
                {currentTable === 0 &&
                    <MainTable content={nature} onCellInfoOpen={(id) => setInfoModalId(id)}/>
                }
                {currentTable === 1 &&
                    <MainTable content={socium} onCellInfoOpen={(id) => setInfoModalId(id)}/>

                }
            </div>
            <MenuSwipe onSelect={(option)=>setCurrentTable(option)}/>
        </div>
    );
};

export default MainPage;