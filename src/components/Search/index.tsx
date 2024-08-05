import { ChangeEvent, MouseEvent, useState } from "react";
import { TAGS } from "constants/tags";
import { useTranslations } from "next-intl";

import styles from "./search.module.scss";

const getFilteredSymbols = (symbols: string[], inputValue: string): string[] =>
    symbols
        .filter((symbol) => symbol.toLowerCase().includes(inputValue.toLowerCase()))
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

interface SearchProps {
    placeholderText: string;
    setInputValue: (value: string) => void;
}

export const Search = ({ setInputValue, placeholderText }: SearchProps) => {
    const t = useTranslations("HomeHero");
    const [isListOpen, setIsListOpen] = useState(true);
    const [value, setValue] = useState("");

    const handleItemClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (!(e.target instanceof HTMLElement)) return;
        setIsListOpen(false);
        setInputValue(e.target.textContent ?? "");
        setValue("");
    };

    const handleFocused = () => {
        setIsListOpen(true);
    };

    const getTagsListFromObject = <T extends { title: string }>(array: T[]): string[] =>
        array.map((el) => el.title);
    const filteredSymbols = getFilteredSymbols(getTagsListFromObject(TAGS), value);

    const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const { target } = e;
        setValue(target.value);
    };
    const handleButtonClick = () => {
        setInputValue(value);
        setValue("");
    };

    return (
        <div className={styles.inputContainer}>
            <div className={styles.inputSearch}>
                <input
                    type="text"
                    placeholder={placeholderText}
                    value={value}
                    onChange={handleChangeSearch}
                    className={styles.input}
                    onFocus={handleFocused}
                />
                <button className={styles.inputSearchButton} onClick={handleButtonClick}>
                    {t("Category.searchButton")}
                </button>
            </div>

            <ul className={styles.currencyList}>
                {value.length !== 0 &&
                    isListOpen &&
                    filteredSymbols.map((symbol) => (
                        <li key={symbol} className={styles.currencyListItem}>
                            <button
                                type="button"
                                onClick={handleItemClick}
                                className={styles.currencyListItemButton}>
                                {symbol}
                            </button>
                        </li>
                    ))}
            </ul>
        </div>
    );
};
