import styles from "./SearchForm.module.scss";
import {useSearchForm} from "../../../../processes/hooks/useSearchForm.ts";
import {CircleMinus, CirclePlus} from "lucide-react";

const SearchForm = () => {
    const {
        travelFromRef,
        travelToRef,
        travelDateRef,
        travelPassNumRef,
        uiFilters,
        handleTravelFromChange,
        handleTravelToChange,
        handleTravelDateChange,
        incrementPassengers,
        decrementPassengers,
        handleSubmit,
        getCurrentDate
    } = useSearchForm();

    const formatedDate = getCurrentDate();
    const isFieldFilled = (value: string | number) => {
        return value !== "" && value !== " " && value !== 0;
    };
    console.log(1)
    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div className={`${styles.travelFrom} ${styles.formElement} ${
                isFieldFilled(uiFilters.travelFrom) ? styles.filled : ''
            }`}>
                <select
                    name="travel-from"
                    ref={travelFromRef}
                    value={uiFilters.travelFrom}
                    onChange={(e) => handleTravelFromChange(e.target.value)}
                >
                    <option hidden selected value=" "></option>
                    <option value="moscow">Москва</option>
                    <option value="spb">Санкт-Петербург</option>
                    <option value="kazan">Казань</option>
                </select>
                <label htmlFor="travel-from">Откуда</label>
            </div>

            <div className={`${styles.travelTo} ${styles.formElement} ${
                isFieldFilled(uiFilters.travelTo) ? styles.filled : ''
            }`}>
                <select
                    name="travel-to"
                    ref={travelToRef}
                    value={uiFilters.travelTo}
                    onChange={(e) => handleTravelToChange(e.target.value)}
                >
                    <option hidden selected value=" "> </option>
                    <option value="moscow">Москва</option>
                    <option value="spb">Санкт-Петербург</option>
                    <option value="kazan">Казань</option>
                </select>
                <label htmlFor="travel-to">Куда</label>
            </div>

            <div className={`${styles.eventDate} ${styles.formElement} ${
                isFieldFilled(uiFilters.travelDate) ? styles.filled : ''
            }`}>
                <input
                    type="date"
                    name="event-date"
                    ref={travelDateRef}
                    value={uiFilters.travelDate}
                    onChange={(e) => handleTravelDateChange(e.target.value)}
                    min={formatedDate}
                />
                <label htmlFor="event-date">Когда</label>
            </div>

            <div className={`${styles.passNum} ${styles.formElement} ${
                isFieldFilled(uiFilters.travelPassNum) ? styles.filled : ''
            }`}>
                <input
                    type="number"
                    max={8}
                    min={1}
                    name="passangers-number"
                    ref={travelPassNumRef}
                    value={uiFilters.travelPassNum}
                    readOnly
                />
                <label htmlFor="passangers-number">Пассажиры</label>
                <div className={styles.btnGroup}>
                    <button
                        type="button"
                        onClick={incrementPassengers}
                        disabled={uiFilters.travelPassNum >= 8}
                    >
                        <CirclePlus strokeWidth={1} size={36}/>
                    </button>
                    <button
                        type="button"
                        onClick={decrementPassengers}
                        disabled={uiFilters.travelPassNum <= 1}
                    >
                        <CircleMinus strokeWidth={1} size={36}/>
                    </button>
                </div>
            </div>

            <div className={styles.submitBtn}>
                <button type="submit">Поиск</button>
            </div>
        </form>
    );
};

export default SearchForm;