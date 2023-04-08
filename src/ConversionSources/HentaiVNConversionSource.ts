import { PaperbackBackup } from "../Paperback/PaperbackBackup"
import { PaperbackRepository } from "../Paperback/PaperbackRepository"
import { TachiyomiObjectModel } from "../Tachiyomi/proto/TachiyomiObjectModel"
import { AbstractConversionSource } from "./AbstractConversionSource"

export class HentaiVNConversionSource extends AbstractConversionSource {

    // Only an `en` source exist for Guya
    tachiyomiSourceIds: string[] = ["6560768551969686205"]

    paperbackSourceId: string = "HentaiVN"             // In this case, the source ID in Paperback is also Guya!

    tachiyomiSourceName: string = "HentaiVN"

    paperbackSourceRepository = PaperbackRepository.PROMISES

    /*
        mangaID:
            Tachiyomi: "/33344-doc-truyen-rabbit-egg-blue-archive.html"
            Paperback: "33344"
        chapterId:
            Tachiyomi: "/33344-61635-xem-truyen-rabbit-egg-blue-archive-oneshot.html"
            Paperback: "61635"
    */

    parseTachiyomiMangaId(tachiyomiId: string, mangaInfo: TachiyomiObjectModel.IBackupManga): string {
        return tachiyomiId.split('-')[0].replace('/', '')
    }
    parseTachiyomiChapterId(tachiyomiId: string, mangaInfo: TachiyomiObjectModel.IBackupManga): string {
        return tachiyomiId.split("-")[1]
    }
    parsePaperbackMangaId(paperbackId: string, mangaInfo: PaperbackBackup.SourceManga): string {
        return paperbackId
    }
    parsePaperbackChapterId(paperbackId: string, mangaInfo: PaperbackBackup.SourceManga): string {
        const [chapterId, group] = paperbackId.split("|")
        const mangaId = mangaInfo.mangaId
        return mangaId + "/" + chapterId + "/" + group
    }

}
