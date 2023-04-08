# Tachiyomi and Paperback Backup Converter

# Features

* Tachiyomi to Paperback backup conversion
    Convert the library, read chapter markers and categories

* Paperback to Tachiyomi backup conversion
    Convert the library and read chapter markers
    NOTE: Library tabs are currently not converted, see [Limitations](#limitations)
    NOTE: Sources used may not be in the correct language, requiring a migration, see [Limitations](#limitations)

> Supported sources: only source of [extension-vn](https://github.com/hoang3402/extensions-vn)

* Tachiyomi backup manager
    Allow to inflate, decode, export, encode and gzip Tachiyomi backups.

* Light representation
    Export Tachiyomi and Paperback backups into a small representation, easily usable to display their library content.

# Where can I use this tool
On Paperback and Tachiyomi websites
Using this repository [scripts and ressources](#ressources)

---

# How to use

1. Fork and clone this repository

2. Run:
> Make sure you have [node](https://nodejs.org/en/download)

```bash
npm install
```
3. Get file backup from tachiyomi and put it '/ressources/backup-examples/youfilebackup.proto.gz'

4. Edit file 'ressources/convertTachiToPaperBackup.ts'
```
backupPath = 'ressources/backup-examples/youfilebackup.proto.gz'
```

5. Run convert:
```bash
npx ts-node ressources/convertPaperToTachiBackup.ts 
```

6. You can see result from 'ressources/converted-backup-examples/'

You will then be able to modify this tool.

> To add support for a new source, simply create a new class, inheriting from `AbstractConversionSource`.
> Update `ConversionSources.ts` with the new source converter to make it accessible for the backup converters.

To test your modifications, you can use this repository's [scripts and ressources](#ressources)

---

# Limitations

Paperback to Tachiyomi converter does not include categories to not raise the error "Expected wire type 0, found 2" when the backup is restored in the app. 
See `src/BackupConverters/PaperToTachiBackupConverter.ts` `parseBackupManga()` definition

If Tachiyomi use a different source for each language, Paperback only have a multi-languages source. Thus when converting from Paperback to Tachiyomi, the source used may be the English one, requiring a migration to use the correct one.

Tachiyomi use numeric sources ids like 2499283573021220255. To prevent an overflow, these ids should be used as `Long`.
See `src/BackupConverters/PaperToTachiBackupConverter.ts` `parseBackupManga()` definition
