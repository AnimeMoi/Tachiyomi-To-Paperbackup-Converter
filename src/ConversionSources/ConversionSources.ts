import { HentaiVNConversionSource } from "./HentaiVNConversionSource";
import { NettruyenConversionSource } from "./NettruyenConversionSource";

/**
 * A function that return a list of all available source converters. 
 * It is used by backup converters to be able to access all existing source converters
 */
export function getConversionSourcesList() {
    /*
        This function should be updated when a new source converter is added
    */
    return [
        new HentaiVNConversionSource(),
        new NettruyenConversionSource(),
    ]
}



/**
 * @returns the list of existing converters' names. 
 * Used to display available converters
 */
export function getConversionSourcesNames() {
    return getConversionSourcesList().map((converter) => converter.tachiyomiSourceName)
}