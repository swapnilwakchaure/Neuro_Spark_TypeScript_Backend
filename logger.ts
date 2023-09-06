import { createLogger, transports, format } from 'winston';



const logger = createLogger({
    transports: [
        new transports.Console(),
        new transports.File({
            level: 'warn',
            filename: 'logsWarnings.log'
        }),
        new transports.File({
            level: 'error',
            filename: 'logsErrors.log'
        }),
        new transports.File({
            level: 'http',
            filename: 'logsHttp.log'
        })
    ],
    format: format.combine(
        format.json(),
        format.timestamp(),
        format.prettyPrint(),
        format.metadata()
    )
});



export { logger }; 
