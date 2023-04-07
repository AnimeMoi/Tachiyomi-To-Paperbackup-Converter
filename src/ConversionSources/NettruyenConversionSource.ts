import { PaperbackBackup } from "../Paperback/PaperbackBackup"
import { PaperbackRepository } from "../Paperback/PaperbackRepository"
import { TachiyomiObjectModel } from "../Tachiyomi/proto/TachiyomiObjectModel"
import { AbstractConversionSource } from "./AbstractConversionSource"

export class NettruyenConversionSource extends AbstractConversionSource {

    // There is no `all` source but only a `en` source: "2499283573021220255", used as default
    tachiyomiSourceIds: string[] = ["5198966899163361086"]
    paperbackSourceId: string = "Nettruyen"             // In this case, the source ID in Paperback is also Nettruyen!

    tachiyomiSourceName: string = "NetTruyen"

    paperbackSourceRepository = PaperbackRepository.STATEFUL

    /*
        mangaID:
            Tachiyomi: "/truyen-tranh/mendokusagari-danshi-koukousei-ga-asa-okitara-onnanoko-ni-natteita-hanashi-197780"
            Paperback: "mendokusagari-danshi-koukousei-ga-asa-okitara-onnanoko-ni-natteita-hanashi-197780"
        chapterId
            Tachiyomi: "/truyen-tranh/dinh-cap-khi-van-lang-le-tu-luyen-ngan-nam/chap-56/937630"
            Paperback: "/truyen-tranh/dinh-cap-khi-van-lang-le-tu-luyen-ngan-nam/chap-56/937630"
    */

    parseTachiyomiMangaId(tachiyomiId: string, mangaInfo: TachiyomiObjectModel.IBackupManga): string {
        return tachiyomiId.split('/')[1].replace('/', '')
    }
    parseTachiyomiChapterId(tachiyomiId: string, mangaInfo: TachiyomiObjectModel.IBackupManga): string {
        return tachiyomiId
    }
    parsePaperbackMangaId(paperbackId: string, mangaInfo: PaperbackBackup.SourceManga): string {
        return "/manga/" + paperbackId
    }
    parsePaperbackChapterId(paperbackId: string, mangaInfo: PaperbackBackup.SourceManga): string {
        return "/chapter/" + paperbackId
    }

}