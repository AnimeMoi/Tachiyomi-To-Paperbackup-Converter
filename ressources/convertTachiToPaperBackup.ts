/**
 * Convert a Tachiyomi backup using {@link TachiToPaperBackupConverter}
 * 
 * Can be used with
 * ```bash
 * npx ts-node ressources/convertTachiToPaperBackup.ts 
 * ```
 */

import { existsSync, mkdir, mkdirSync, readFileSync, writeFile } from "fs"
import { basename } from "path"
import { TachiToPaperBackupConverter } from "../src/BackupConverters/TachiToPaperBackupConverter"
import { TachiyomiBackupManager } from "../src/BackupManagers/TachiyomiBackupManager"

const backupPath = 'ressources/backup-examples/tachiyomi_2023-04-07_00-21.proto.gz'
const outputDirectory = 'ressources/converted-backup-examples/'

const protoGzFile = readFileSync(backupPath)

const tachiyomiBackupManager = new TachiyomiBackupManager()
tachiyomiBackupManager.loadProtoGz(protoGzFile)

const tachiyomiBackup = tachiyomiBackupManager.exportBackup()

const convertionManager = new TachiToPaperBackupConverter(tachiyomiBackup)

convertionManager.conversion()
    .then((paperbackBackup) => {

        if (!existsSync(outputDirectory)) {
            mkdirSync(outputDirectory)
        }
        const outputPath = outputDirectory + 'ExpToPaper-' + basename(backupPath).replace('.proto.gz', '.json')
        // const outputPath1 = outputDirectory + '1-' + basename(backupPath).replace('.proto.gz', '.json')
        // writeFile(outputPath1, JSON.stringify(tachiyomiBackup), (err) => {
        //     if (err) throw err;
        //     console.log('Backup saved!');
        // })
        writeFile(outputPath, JSON.stringify(paperbackBackup), (err) => {
            if (err) throw err;
            console.log('Backup saved!');
        })
    })