export interface User{
    username:String;
    password:String;
    
}

export interface Users{
    userid:number;
    username:String;
    password:String;
    firstName:String;
    lastName:String;
    Bdate:Date ;
    city:String;
    email:String;
    description:String;
}
export interface Admin{
    username:String;
    password:String;
    
}

export interface Doctors{
    doctorid:number;
    doctorName:String;
    specialization:String;
    city:String;
    ratings:number;
    availableDateTime:Date;

}

export interface Appointments{
    appointmentid:number;
    patientId:number;
    patientName:string;
    bookingDate:Date;
    timeSlot:string;
    doctorName:String;
    useremail:String;

}