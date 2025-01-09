import dayjs from 'dayjs';

const FormatarDateTimeBanco = (): string => {
    return dayjs().format('YYYY-MM-DD HH:mm:ss');
}


export const Formatadores = {
    FormatarDateTimeBanco,
}
