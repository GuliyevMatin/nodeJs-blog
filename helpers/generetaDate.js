import moment from 'moment'
export const generateDate = (date,format)=>{
    return moment(date).format(format)
}