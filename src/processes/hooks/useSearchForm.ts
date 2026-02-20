import { useCallback, useRef, useState } from "react";

export interface SearchFormDataType {
    travelFrom: string;
    travelTo: string;
    travelDate: string;
    travelPassNum: number;
}

export function useSearchForm() {
    const getCurrentDate = () => {
        const date = new Date();
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${year}-${month}-${day}`;
    };

    const initialFilters: SearchFormDataType = {
        travelFrom: "",
        travelTo: "",
        travelDate: getCurrentDate(),
        travelPassNum: 1,
    };

    const [uiFilters, setUiFilters] = useState<SearchFormDataType>(initialFilters);

    const actualFiltersRef = useRef<SearchFormDataType>(initialFilters);

    const travelFromRef = useRef<HTMLSelectElement>(null);
    const travelToRef = useRef<HTMLSelectElement>(null);
    const travelDateRef = useRef<HTMLInputElement>(null);
    const travelPassNumRef = useRef<HTMLInputElement>(null);

    const updateUiFilter = useCallback(
        <K extends keyof SearchFormDataType>(field: K, value: SearchFormDataType[K]) => {
            setUiFilters(prev => ({
                ...prev,
                [field]: value
            }));
        },
        []);

    const handleTravelFromChange = (value: string) => updateUiFilter("travelFrom", value);
    const handleTravelToChange = (value: string) => updateUiFilter("travelTo", value);
    const handleTravelDateChange = (value: string) => updateUiFilter("travelDate", value);
    const handlePassNumChange = (value: number) => updateUiFilter("travelPassNum", value);

    const incrementPassengers = () => {
        if (uiFilters.travelPassNum < 8) {
            updateUiFilter("travelPassNum", uiFilters.travelPassNum + 1);
        }
    };

    const decrementPassengers = () => {
        if (uiFilters.travelPassNum > 1) {
            updateUiFilter("travelPassNum", uiFilters.travelPassNum - 1);
        }
    };

    // делаем колл на API с актуальными фильтрами или же сохроняем актульные данные в API и делаем поиск локально можно пока следить в консоли и удалить при продакшане
    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();

        actualFiltersRef.current = { ...uiFilters };

        console.log("Выполняем поиск с фильтрами и делаем кол на ```API```:", actualFiltersRef.current);
    }, [uiFilters]);

    return {
        travelFromRef,
        travelToRef,
        travelDateRef,
        travelPassNumRef,

        uiFilters,

        handleTravelFromChange,
        handleTravelToChange,
        handleTravelDateChange,
        handlePassNumChange,
        incrementPassengers,
        decrementPassengers,

        handleSubmit,
        getCurrentDate,
    };
}
