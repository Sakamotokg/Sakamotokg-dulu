"use strict";

const gameData = [
    {
        id: 1, 
        Teacher: "MS. DEA", 
        Day: "MONDAY",
        Time: "14.00",
        Grade: "GRADE 1",
    },

    {
        id: 2, 
        Teacher: "MS. DEA", 
        Day: "MONDAY",
        Time: "15.00",
        Grade: "GRADE 2",
    },

    {
        id: 3, 
        Teacher: "MS. DEA", 
        Day: "MONDAY",
        Time: "16.00",
        Grade: "GRADE 5",
    }, 

    {
        id: 4, 
        Teacher: "MS. DEA", 
        Day: "MONDAY",
        Time: "17.00",
        Grade: "GRADE 6",
        
    }, 

    {
        id: 5, 
        Teacher: "MS. DEA", 
        Day: "TUESDAY",
        Time: "13.00",
        Grade: "GRADE 3",
        
    },

    {
        id: 6, 
        Teacher: "MS. DEA", 
        Day: "TUESDAY",
        Time: "14.00",
        Grade: "GRADE 5",
        
    },

    {
        id: 7, 
        Teacher: "MS. DEA", 
        Day: "TUESDAY",
        Time: "15.00",
        Grade: "GRADE 6",
        
    }, 

    {
        id: 8, 
        Teacher: "MS. DEA", 
        Day: "TUESDAY",
        Time: "16.00",
        Grade: "GRADE 4",
        
    },

    {
        id: 9, 
        Teacher: "MS. DEA", 
        Day: "TUESDAY",
        Time: "17.00",
        Grade: "GRADE 3",
        
    },

    {
        id: 10, 
        Teacher: "MS. DEA", 
        Day: "WEDNESDAY",
        Time: "14.00",
        Grade: "GRADE 4",
        
    },

    {
        id: 11, 
        Teacher: "MS. DEA", 
        Day: "WEDNESDAY",
        Time: "15.00",
        Grade: "GRADE 3",
        
    }, 

    {
        id: 12, 
        Teacher: "MS. DEA", 
        Day: "WEDNESDAY",
        Time: "16.00",
        Grade: "GRADE 1",
        
    }, 

    {
        id: 13, 
        Teacher: "MS. DEA", 
        Day: "WEDNESDAY",
        Time: "17.00",
        Grade: "GRADE 2",
        
    },

    {
        id: 14, 
        Teacher: "MS. DEA", 
        Day: "THURSDAY",
        Time: "14.00",
        Grade: "GRADE 1",
        
    }, 

   {
        id: 15, 
        Teacher: "MS. DEA", 
        Day: "THURSDAY",
        Time: "15.00",
        Grade: "GRADE 2",
        
    }, 

    {
        id: 16, 
        Teacher: "MS. DEA", 
        Day: "THURSDAY",
        Time: "16.00",
        Grade: "GRADE 5",
        
    },

    {
        id: 17, 
        Teacher: "MS. DEA", 
        Day: "THURSDAY",
        Time: "17.00",
        Grade: "GRADE 6",
        
    }, 

    {
        id: 18, 
        Teacher: "MS. DEA", 
        Day: "FRIDAY",
        Time: "13.00",
        Grade: "GRADE 3",
        
    },

    {
        id: 19, 
        Teacher: "MS. DEA", 
        Day: "FRIDAY",
        Time: "14.00",
        Grade: "GRADE 5",
        
    },

    {
        id: 20, 
        Teacher: "MS. DEA", 
        Day: "FRIDAY",
        Time: "15.00",
        Grade: "GRADE 6",
        
    },

    {
        id: 21, 
        Teacher: "MS. DEA", 
        Day: "FRIDAY",
        Time: "16.00",
        Grade: "GRADE 4",
        
    },

    {
        id: 22, 
        Teacher: "MS. DEA", 
        Day: "FRIDAY",
        Time: "17.00",
        Grade: "GRADE 3",
        
    },

    {
        id: 23, 
        Teacher: "MS. DEA", 
        Day: "SATURDAY",
        Time: "9.00",
        Grade: "GRADE 2",
        
    },

    {
        id: 24, 
        Teacher: "MS. DEA", 
        Day: "SATURDAY",
        Time: "10.00",
        Grade: "GRADE 3",
        
    },

    {
        id: 25, 
        Teacher: "MS. DEA", 
        Day: "SATURDAY",
        Time: "11.00",
        Grade: "GRADE 4",
        
    },

    {
        id: 26, 
        Teacher: "MS. DEA", 
        Day: "SATURDAY",
        Time: "13.00",
        Grade: "GRADE 1",
        
    },

    {
        id: 27, 
        Teacher: "MS. DEA", 
        Day: "SATURDAY",
        Time: "14.00",
        Grade: "GRADE 2",
        
    }, 

    {
        id: 28, 
        Teacher: "MS. YOLA", 
        Day: "MONDAY",
        Time: "14.00",
        Grade: "GRADE 3",
        
    }, 

    {
        id: 29, 
        Teacher: "MS. YOLA", 
        Day: "MONDAY",
        Time: "15.00",
        Grade: "GRADE 4",
        
    },

    {
        id: 30, 
        Teacher: "MS. YOLA", 
        Day: "MONDAY",
        Time: "16.00",
        Grade: "GRADE 1",
        
    },

    {
        id: 31, 
        Teacher: "MS. YOLA", 
        Day: "MONDAY",
        Time: "17.00",
        Grade: "GRADE 2",
        
    },

    {
        id: 32, 
        Teacher: "MS. YOLA", 
        Day: "TUESDAY",
        Time: "14.00",
        Grade: "GRADE 2",
        
    },

    {
        id: 33, 
        Teacher: "MS. YOLA", 
        Day: "TUESDAY",
        Time: "15.00",
        Grade: "GRADE 1",
        
    },

    {
        id: 34, 
        Teacher: "MS. YOLA", 
        Day: "TUESDAY",
        Time: "16.00",
        Grade: "GRADE 3",
        
    },

    {
        id: 35, 
        Teacher: "MS. YOLA", 
        Day: "TUESDAY",
        Time: "17.00",
        Grade: "GRADE 4",
        
    },

    {
        id: 36, 
        Teacher: "MS. YOLA", 
        Day: "WEDNESDAY",
        Time: "14.00",
        Grade: "GRADE 1",
        
    },

    {
        id: 37, 
        Teacher: "MS. YOLA", 
        Day: "WEDNESDAY",
        Time: "15.00",
        Grade: "GRADE 2",
        
    },

    {
        id: 38, 
        Teacher: "MS. YOLA", 
        Day: "WEDNESDAY",
        Time: "16.00",
        Grade: "GRADE 4",
        
    },

    {
        id: 39, 
        Teacher: "MS. YOLA", 
        Day: "WEDNESDAY",
        Time: "17.00",
        Grade: "GRADE 3",
        
    },

    {
        id: 40, 
        Teacher: "MS. YOLA", 
        Day: "THURSDAY",
        Time: "14.00",
        Grade: "GRADE 3",
        
    },

    {
        id: 41, 
        Teacher: "MS. YOLA", 
        Day: "THURSDAY",
        Time: "15.00",
        Grade: "GRADE 4",
        
    },

    {
        id: 42, 
        Teacher: "MS. YOLA", 
        Day: "THURSDAY",
        Time: "16.00",
        Grade: "GRADE 1",
        
    }, 

    {
        id: 43, 
        Teacher: "MS. YOLA", 
        Day: "THURSDAY",
        Time: "17.00",
        Grade: "GRADE 2",
        
    },

    {
        id: 44, 
        Teacher: "MS. YOLA", 
        Day: "FRIDAY",
        Time: "14.00",
        Grade: "GRADE 2",
        
    },

    {
        id: 45, 
        Teacher: "MS. YOLA", 
        Day: "FRIDAY",
        Time: "15.00",
        Grade: "GRADE 1",
        
    },

    {
        id: 46, 
        Teacher: "MS. YOLA", 
        Day: "FRIDAY",
        Time: "16.00",
        Grade: "GRADE 3",
        
    },

    {
        id: 47, 
        Teacher: "MS. YOLA", 
        Day: "FRIDAY",
        Time: "17.00",
        Grade: "GRADE 4",
        
    },

    {
        id: 48, 
        Teacher: "MS. YOLA", 
        Day: "SATURDAY",
        Time: "9.00",
        Grade: "GRADE 1",
        
    },

    {
        id: 49, 
        Teacher: "MS. YOLA", 
        Day: "SATURDAY",
        Time: "10.00",
        Grade: "GRADE 2",
        
    },

    {
        id: 50, 
        Teacher: "MS. YOLA", 
        Day: "SATURDAY",
        Time: "11.00",
        Grade: "GRADE 3",
        
    }, 

    {
        id: 51, 
        Teacher: "MS. YOLA", 
        Day: "SATURDAY",
        Time: "13.00",
        Grade: "GRADE 4",
        
    },

    {
        id: 52, 
        Teacher: "MS. YOLA", 
        Day: "SATURDAY",
        Time: "14.00",
        Grade: "GRADE 3",
        
    },

    {
        id: 53, 
        Teacher: "MS. IRMA", 
        Day: "MONDAY",
        Time: "14.00",
        Grade: "GRADE 5",
        
    },

    {
        id: 54, 
        Teacher: "MS. IRMA", 
        Day: "MONDAY",
        Time: "15.00",
        Grade: "GRADE 6",
        
    },

    {
        id: 55, 
        Teacher: "MS. IRMA", 
        Day: "MONDAY",
        Time: "16.00",
        Grade: "GRADE 3",
        
    },

    {
        id: 56, 
        Teacher: "MS. IRMA", 
        Day: "MONDAY",
        Time: "17.00",
        Grade: "GRADE 4",
        
    },

    {
        id: 57, 
        Teacher: "MS. IRMA", 
        Day: "TUESDAY",
        Time: "14.00",
        Grade: "GRADE 3",
        
    },

    {
        id: 58, 
        Teacher: "MS. IRMA", 
        Day: "TUESDAY",
        Time: "15.00",
        Grade: "GRADE 4",
        
    },

    {
        id: 59, 
        Teacher: "MS. IRMA", 
        Day: "TUESDAY",
        Time: "16.00",
        Grade: "GRADE 5",
        
    },

    {
        id: 60, 
        Teacher: "MS. IRMA", 
        Day: "TUESDAY",
        Time: "17.00",
        Grade: "GRADE 1",
        
    },

    {
        id: 61, 
        Teacher: "MS. IRMA", 
        Day: "WEDNESDAY",
        Time: "14.00",
        Grade: "GRADE 2",
        
    }, 

    {
        id: 62, 
        Teacher: "MS. IRMA", 
        Day: "WEDNESDAY",
        Time: "15.00",
        Grade: "GRADE 1",
        
    },

    {
        id: 63, 
        Teacher: "MS. IRMA", 
        Day: "WEDNESDAY",
        Time: "16.00",
        Grade: "GRADE 5",
        
    }, 

    {
        id: 64, 
        Teacher: "MS. IRMA", 
        Day: "WEDNESDAY",
        Time: "17.00",
        Grade: "GRADE 6",
        
    },

    {
        id: 65, 
        Teacher: "MS. IRMA", 
        Day: "THURSDAY",
        Time: "14.00",
        Grade: "GRADE 5",
        
    },

    {
        id: 66, 
        Teacher: "MS. IRMA", 
        Day: "THURSDAY",
        Time: "15.00",
        Grade: "GRADE 6",
        
    },

    {
        id: 67, 
        Teacher: "MS. IRMA", 
        Day: "THURSDAY",
        Time: "16.00",
        Grade: "GRADE 3",
        
    }, 

    {
        id: 68, 
        Teacher: "MS. IRMA", 
        Day: "THURSDAY",
        Time: "17.00",
        Grade: "GRADE 4",
        
    },

    {
        id: 69, 
        Teacher: "MS. IRMA", 
        Day: "FRIDAY",
        Time: "14.00",
        Grade: "GRADE 3",
        
    },

    {
        id: 70, 
        Teacher: "MS. IRMA", 
        Day: "FRIDAY",
        Time: "15.00",
        Grade: "GRADE 4",
        
    },

    {
        id: 71, 
        Teacher: "MS. IRMA", 
        Day: "FRIDAY",
        Time: "16.00",
        Grade: "GRADE 2",
        
    },

    {
        id: 72, 
        Teacher: "MS. IRMA", 
        Day: "FRIDAY",
        Time: "17.00",
        Grade: "GRADE 1",
        
    },

    {
        id: 73, 
        Teacher: "MS. IRMA", 
        Day: "SATURDAY",
        Time: "9.00",
        Grade: "GRADE 3",
        
    },

    {
        id: 74, 
        Teacher: "MS. IRMA", 
        Day: "SATURDAY",
        Time: "10.00",
        Grade: "GRADE 2",
        
    },

    {
        id: 75, 
        Teacher: "MS. IRMA", 
        Day: "SATURDAY",
        Time: "11.00",
        Grade: "GRADE 1",
        
    },

    {
        id: 76, 
        Teacher: "MS. IRMA", 
        Day: "SATURDAY",
        Time: "13.00",
        Grade: "GRADE 5",
        
    },

    {
        id: 77, 
        Teacher: "MS. IRMA", 
        Day: "SATURDAY",
        Time: "14.00",
        Grade: "GRADE 6",
        
    },

    {
        id: 78, 
        Teacher: "MS. PUPUT", 
        Day: "MONDAY",
        Time: "14.00",
        Kelas: "KELAS 1",
        
    },

    {
        id: 79, 
        Teacher: "MS. PUPUT", 
        Day: "MONDAY",
        Time: "15.00",
        Kelas: "KELAS 2",
        
    },

    {
        id: 80, 
        Teacher: "MS. PUPUT", 
        Day: "MONDAY",
        Time: "16.00",
        Kelas: "KELAS 5",
        
    },

    {
        id: 81, 
        Teacher: "MS. PUPUT", 
        Day: "MONDAY",
        Time: "17.00",
        Kelas: "KELAS 6",
        
    },

    {
        id: 82, 
        Teacher: "MS. PUPUT", 
        Day: "TUESDAY",
        Time: "14.00",
        Kelas: "KELAS 5",
        
    },

    {
        id: 83, 
        Teacher: "MS. PUPUT", 
        Day: "TUESDAY",
        Time: "15.00",
        Kelas: "KELAS 6",
        
    },

    {
        id: 84, 
        Teacher: "MS. PUPUT", 
        Day: "TUESDAY",
        Time: "16.00",
        Kelas: "KELAS 4",
        
    },

    {
        id: 85, 
        Teacher: "MS. PUPUT", 
        Day: "TUESDAY",
        Time: "17.00",
        Kelas: "KELAS 3",
        
    },

    {
        id: 86, 
        Teacher: "MS. PUPUT", 
        Day: "WEDNESDAY",
        Time: "14.00",
        Kelas: "KELAS 4",
        
    },

    {
        id: 87, 
        Teacher: "MS. PUPUT", 
        Day: "WEDNESDAY",
        Time: "15.00",
        Kelas: "KELAS 3",
        
    },

    {
        id: 88, 
        Teacher: "MS. PUPUT", 
        Day: "WEDNESDAY",
        Time: "16.00",
        Kelas: "KELAS 1",
        
    },

    {
        id: 89, 
        Teacher: "MS. PUPUT", 
        Day: "WEDNESDAY",
        Time: "17.00",
        Kelas: "KELAS 2",
        
    },

    {
        id: 90, 
        Teacher: "MS. PUPUT", 
        Day: "THURSDAY",
        Time: "14.00",
        Kelas: "KELAS 1",
        
    },

    {
        id: 91, 
        Teacher: "MS. PUPUT", 
        Day: "THURSDAY",
        Time: "15.00",
        Kelas: "KELAS 2",
        
    },

    {
        id: 92, 
        Teacher: "MS. PUPUT", 
        Day: "THURSDAY",
        Time: "16.00",
        Kelas: "KELAS 5",
        
    },

    {
        id: 93, 
        Teacher: "MS. PUPUT", 
        Day: "THURSDAY",
        Time: "17.00",
        Kelas: "KELAS 6",
        
    },

    {
        id: 94, 
        Teacher: "MS. PUPUT", 
        Day: "FRIDAY",
        Time: "14.00",
        Kelas: "KELAS 5",
        
    },

    {
        id: 95, 
        Teacher: "MS. PUPUT", 
        Day: "FRIDAY",
        Time: "15.00",
        Kelas: "KELAS 6",
        
    }, 

    {
        id: 96, 
        Teacher: "MS. PUPUT", 
        Day: "FRIDAY",
        Time: "16.00",
        Kelas: "KELAS 4",
        
    },

    {
        id: 97, 
        Teacher: "MS. PUPUT", 
        Day: "FRIDAY",
        Time: "17.00",
        Kelas: "KELAS 3",
        
    },

    {
        id: 98, 
        Teacher: "MS. PUPUT", 
        Day: "SATURDAY",
        Time: "9.00",
        Kelas: "KELAS 5",
        
    },

    {
        id: 99, 
        Teacher: "MS. PUPUT", 
        Day: "SATURDAY",
        Time: "10.00",
        Kelas: "KELAS 4",
        
    },

    {
        id: 100, 
        Teacher: "MS. PUPUT", 
        Day: "SATURDAY",
        Time: "11.00",
        Kelas: "KELAS 3",
        
    },

    {
        id: 101, 
        Teacher: "MS. PUPUT", 
        Day: "SATURDAY",
        Time: "13.00",
        Kelas: "KELAS 1",
        
    },

    {
        id: 102, 
        Teacher: "MS. PUPUT", 
        Day: "SATURDAY",
        Time: "14.00",
        Kelas: "KELAS 2",
        
    },

    {
        id: 103, 
        Teacher: "MR. KIPLI", 
        Day: "MONDAY",
        Time: "14.00",
        Kelas: "KELAS 5",
        
    },

    {
        id: 104, 
        Teacher: "MR. KIPLI",  
        Day: "MONDAY",
        Time: "15.00",
        Kelas: "KELAS 6",
        
    },

    {
        id: 105, 
        Teacher: "MR. KIPLI", 
        Day: "MONDAY",
        Time: "16.00",
        Kelas: "KELAS 3",
        
    },

    {
        id: 106, 
        Teacher: "MR. KIPLI", 
        Day: "MONDAY",
        Time: "17.00",
        Kelas: "KELAS 4",
        
    },

    {
        id: 107, 
        Teacher: "MR. KIPLI", 
        Day: "TUESDAY",
        Time: "14.00",
        Kelas: "KELAS 3",
        
    },

    {
        id: 108, 
        Teacher: "MR. KIPLI", 
        Day: "TUESDAY",
        Time: "15.00",
        Kelas: "KELAS 4",
        
    },

    {
        id: 109, 
        Teacher: "MR. KIPLI", 
        Day: "TUESDAY",
        Time: "16.00",
        Kelas: "KELAS 5",
        
    },

    {
        id: 110, 
        Teacher: "MR. KIPLI", 
        Day: "TUESDAY",
        Time: "17.00",
        Kelas: "KELAS 1",
        
    },

    {
        id: 111, 
        Teacher: "MR. KIPLI", 
        Day: "WEDNESDAY",
        Time: "14.00",
        Kelas: "KELAS 2",
        
    },

    {
        id: 112, 
        Teacher: "MR. KIPLI", 
        Day: "WEDNESDAY",
        Time: "15.00",
        Kelas: "KELAS 1",
        
    },

    {
        id: 113, 
        Teacher: "MR. KIPLI", 
        Day: "WEDNESDAY",
        Time: "16.00",
        Kelas: "KELAS 5",
        
    },

    {
        id: 114, 
        Teacher: "MR. KIPLI", 
        Day: "WEDNESDAY",
        Time: "17.00",
        Kelas: "KELAS 6",
        
    },

    {
        id: 115, 
        Teacher: "MR. KIPLI", 
        Day: "THURSDAY",
        Time: "14.00",
        Kelas: "KELAS 5",
        
    },

    {
        id: 116, 
        Teacher: "MR. KIPLI",  
        Day: "THURSDAY",
        Time: "15.00",
        Kelas: "KELAS 6",
        
    },

    {
        id: 117, 
        Teacher: "MR. KIPLI", 
        Day: "THURSDAY",
        Time: "16.00",
        Kelas: "KELAS 3",
        
    },

    {
        id: 118, 
        Teacher: "MR. KIPLI", 
        Day: "THURSDAY",
        Time: "17.00",
        Kelas: "KELAS 4",
        
    },

    {
        id: 119, 
        Teacher: "MR. KIPLI", 
        Day: "FRIDAY",
        Time: "14.00",
        Kelas: "KELAS 3",
        
    },

    {
        id: 120, 
        Teacher: "MR. KIPLI",  
        Day: "FRIDAY",
        Time: "15.00",
        Kelas: "KELAS 4",
        
    },

    {
        id: 121, 
        Teacher: "MR. KIPLI", 
        Day: "FRIDAY",
        Time: "16.00",
        Kelas: "KELAS 2",
        
    },

    {
        id: 122, 
        Teacher: "MR. KIPLI", 
        Day: "FRIDAY",
        Time: "17.00",
        Kelas: "KELAS 1",
        
    },

    {
        id: 123, 
        Teacher: "MR. KIPLI", 
        Day: "SATURDAY",
        Time: "9.00",
        Kelas: "KELAS 3",
        
    },

    {
        id: 124, 
        Teacher: "MR. KIPLI", 
        Day: "SATURDAY",
        Time: "10.00",
        Kelas: "KELAS 2",
        
    },

    {
        id: 125, 
        Teacher: "MR. KIPLI", 
        Day: "SATURDAY",
        Time: "11.00",
        Kelas: "KELAS 1",
        
    },

    {
        id: 126, 
        Teacher: "MR. KIPLI",  
        Day: "SATURDAY",
        Time: "13.00",
        Kelas: "KELAS 5",
        
    },

    {
        id: 127, 
        Teacher: "MR. KIPLI", 
        Day: "SATURDAY",
        Time: "14.00",
        Kelas: "KELAS 6",
        
    },

    {
        id: 128, 
        Teacher: "MR. ANRE", 
        Day: "MONDAY",
        Time: "14.00",
        Kelas: "GRADE 4",
        
    },

    {
        id: 129, 
        Teacher: "MR. ANRE", 
        Day: "MONDAY",
        Time: "15.00",
        Kelas: "GRADE 1",
        
    },

    {
        id: 130, 
        Teacher: "MR. ANRE", 
        Day: "MONDAY",
        Time: "16.00",
        Kelas: "GRADE 2",
        
    },

    {
        id: 131, 
        Teacher: "MR. ANRE", 
        Day: "MONDAY",
        Time: "17.00",
        Kelas: "GRADE 3",
        
    },

    {
        id: 132, 
        Teacher: "MR. ANRE", 
        Day: "TUESDAY",
        Time: "14.00",
        Kelas: "GRADE 1",
        
    },

    {
        id: 133, 
        Teacher: "MR. ANRE", 
        Day: "TUESDAY",
        Time: "15.00",
        Kelas: "GRADE 2",
        
    },

    {
        id: 134, 
        Teacher: "MR. ANRE", 
        Day: "TUESDAY",
        Time: "16.00",
        Kelas: "GRADE 5",
        
    },

    {
        id: 135, 
        Teacher: "MR. ANRE", 
        Day: "TUESDAY",
        Time: "17.00",
        Kelas: "GRADE 6",
        
    },

    {
        id: 136, 
        Teacher: "MR. ANRE", 
        Day: "WEDNESDAY",
        Time: "13.00",
        Kelas: "GRADE 3",
        
    },

    {
        id: 137, 
        Teacher: "MR. ANRE", 
        Day: "WEDNESDAY",
        Time: "14.00",
        Kelas: "GRADE 2",
        
    },

    {
        id: 138, 
        Teacher: "MR. ANRE", 
        Day: "WEDNESDAY",
        Time: "15.00",
        Kelas: "GRADE 6",
        
    },

    {
        id: 139, 
        Teacher: "MR. ANRE", 
        Day: "WEDNESDAY",
        Time: "16.00",
        Kelas: "GRADE 5",
        
    },

    {
        id: 140, 
        Teacher: "MR. ANRE", 
        Day: "WEDNESDAY",
        Time: "17.00",
        Kelas: "GRADE 4",
        
    },

    {
        id: 141, 
        Teacher: "MR. ANRE", 
        Day: "THURSDAY",
        Time: "14.00",
        Kelas: "GRADE 4",
        
    },

    {
        id: 142, 
        Teacher: "MR. ANRE", 
        Day: "THURSDAY",
        Time: "15.00",
        Kelas: "GRADE 1",
        
    },

    {
        id: 143, 
        Teacher: "MR. ANRE", 
        Day: "THURSDAY",
        Time: "16.00",
        Kelas: "GRADE 2",
        
    },

    {
        id: 144, 
        Teacher: "MR. ANRE", 
        Day: "THURSDAY",
        Time: "17.00",
        Kelas: "GRADE 3",
        
    },

    {
        id: 145, 
        Teacher: "MR. ANRE", 
        Day: "FRIDAY",
        Time: "14.00",
        Kelas: "GRADE 1",
        
    },

    {
        id: 146, 
        Teacher: "MR. ANRE", 
        Day: "FRIDAY",
        Time: "15.00",
        Kelas: "GRADE 2",
        
    },

    {
        id: 147, 
        Teacher: "MR. ANRE", 
        Day: "FRIDAY",
        Time: "16.00",
        Kelas: "GRADE 5",
        
    },

    {
        id: 148, 
        Teacher: "MR. ANRE", 
        Day: "FRIDAY",
        Time: "17.00",
        Kelas: "GRADE 6",
        
    },

    {
        id: 149, 
        Teacher: "MR. ANRE", 
        Day: "SATURDAY",
        Time: "9.00",
        Kelas: "GRADE 6",
        
    },

    {
        id: 150, 
        Teacher: "MR. ANRE", 
        Day: "SATURDAY",
        Time: "10.00",
        Kelas: "GRADE 5",
        
    },

    {
        id: 151, 
        Teacher: "MR. ANRE", 
        Day: "SATURDAY",
        Time: "11.00",
        Kelas: "GRADE 4",
        
    },

    {
        id: 152, 
        Teacher: "MR. ANRE", 
        Day: "SATURDAY",
        Time: "13.00",
        Kelas: "GRADE 3",
        
    },

    {
        id: 153, 
        Teacher: "MR. ANRE", 
        Day: "SATURDAY",
        Time: "14.00",
        Kelas: "GRADE 2",
        
    },
];
/*
const productContainer = document.querySelector(".products_wrapper")
const linksEl = document.querySelectorAll("li a");

//display all dynamic data
window.addEventListener("DOMContentLoaded", () => {
    displayGameData(gameData);
    //console.log(displayData);
});

linksEl.forEach((links) => {
    links.addEventListener("click", (e) => {
        const category = e.target.dataset.id;
        const gameCategory = gameData.filter(function(data){
            if(data.Teacher === category){
                e.target.classList.add("selected");
                return data;
            }

            if(data.Day === category){
                e.target.classList.add("selected");
                return data;
                
            }

            if(data.Time === category){
                e.target.classList.add("selected");
                return data;
            }

            if(data.Grade === category){
                e.target.classList.add("selected");
                return data;
            }
        })
        if(category === "All"){
            displayGameData(gameData);
            e.target.classList.add("selected");
        }else{
            displayGameData(gameCategory)
        }
    });
});


function displayGameData(jadwal){
    let displayData = jadwal.map(function (cat_items) {
        return `<div class="products">
        <div class="content">
            <h3 class="Teacher">
            ${cat_items.Teacher}
            </h3>
            <h3 class="Day">
            ${cat_items.Day} 
            </h3>
            <h3 class="Time">
            ${cat_items.Time} 
            </h3>
            <h3 class="Grade">
            ${cat_items.Grade}
            </h3>
        </div>
        </div>`;
    });
    displayData = displayData.join("");
    productContainer.innerHTML = displayData;
}









const productContainer = document.querySelector(".products_wrapper");
const linksEl = document.querySelectorAll("li a");
let selectedCategories = [];

// Display all dynamic data
window.addEventListener("DOMContentLoaded", () => {
  displayGameData(gameData);
});

linksEl.forEach((links) => {
  links.addEventListener("click", (e) => {
    const category = e.target.dataset.id;
    const isSelected = e.target.classList.contains("selected");

    if (isSelected) {
      e.target.classList.remove("selected");
      selectedCategories = selectedCategories.filter((cat) => cat!== category);
    } else {
      e.target.classList.add("selected");
      selectedCategories.push(category);
    }

    filterGameData();
  });
});

function filterGameData() {
  let filteredData = gameData;

  selectedCategories.forEach((category) => {
    filteredData = filteredData.filter((data) => {
      if (data.Teacher === category) {
        return true;
      }

      if (data.Day === category) {
        return true;
      }

      if (data.Time === category) {
        return true;
      }

      if (data.Grade === category) {
        return true;
      }

      return false;
    });
  });

  displayGameData(filteredData);
}

function displayGameData(jadwal) {
  let displayData = jadwal.map((cat_items) => {
    return `<div class="products">
            <div class="content">
                <h3 class="Teacher">
                ${cat_items.Teacher}
                </h3>
                <h3 class="Day">
                ${cat_items.Day} 
                </h3>
                <h3 class="Time">
                ${cat_items.Time} 
                </h3>
                <h3 class="Grade">
                ${cat_items.Grade}
                </h3>
            </div>
            </div>`;
  });

  displayData = displayData.join("");
  productContainer.innerHTML = displayData;
} */

  // Update the spreadsheet ID, range, and API key

  const productContainer = document.querySelector(".products_wrapper");
  const linksEl = document.querySelectorAll("li a");
  let selectedCategories = [];
  
  // Display all dynamic data
  window.addEventListener("DOMContentLoaded", () => {
    displayGameData(gameData);
  });
  
  linksEl.forEach((links) => {
    links.addEventListener("click", (e) => {
      const category = e.target.dataset.id;
      const isSelected = e.target.classList.contains("selected");
  
      if (isSelected) {
        e.target.classList.remove("selected");
        selectedCategories = selectedCategories.filter((cat) => cat!== category);
      } else {
        e.target.classList.add("selected");
        selectedCategories.push(category);
      }
  
      filterGameData();
    });
  });
  
  function filterGameData() {
    let filteredData = gameData;
  
    const teacherFilter = selectedCategories.filter((category) => {
      return gameData.some((data) => data.Teacher === category);
    });
  
    const dayFilter = selectedCategories.filter((category) => {
      return gameData.some((data) => data.Day === category);
    });
  
    const timeFilter = selectedCategories.filter((category) => {
      return gameData.some((data) => data.Time === category);
    });
  
    const gradeFilter = selectedCategories.filter((category) => {
      return gameData.some((data) => data.Grade === category || data.Kelas === category);
    });
  
    filteredData = filteredData.filter((data) => {
      let isValid = true;
  
      if (teacherFilter.length > 0) {
        isValid = isValid && teacherFilter.includes(data.Teacher);
      }
  
      if (dayFilter.length > 0) {
        isValid = isValid && dayFilter.includes(data.Day);
      }
  
      if (timeFilter.length > 0) {
        isValid = isValid && timeFilter.includes(data.Time);
      }
  
      if (gradeFilter.length > 0) {
        isValid = isValid && (gradeFilter.includes(data.Grade) || gradeFilter.includes(data.Kelas));
      }
  
      return isValid;
    });
  
    displayGameData(filteredData);
  }
  function displayGameData(jadwal, category = '') {
    let filteredData = jadwal;
    if (category) {
      filteredData = jadwal.filter((item) => item.Grade === category);
    }
  
    // Group the data by color
    const colorGroups = {
      'red': [],
      'blue': [],
      'green': [],
    };
    filteredData.forEach((item) => {
      switch (item.Day.toLowerCase()) {
        case 'monday':
        case 'thursday':
          colorGroups['red'].push(item);
          break;
        case 'tuesday':
        case 'friday':
          colorGroups['blue'].push(item);
          break;
        case 'wednesday':
        case 'saturday':
          colorGroups['green'].push(item);
          break;
        default:
          console.error(`Unknown day: ${item.Day}`);
      }
    });
  
    let displayData = '';
    Object.keys(colorGroups).forEach((color) => {
      displayData += `<div class="color-group ${color}">`;
      colorGroups[color].forEach((item) => {
        const isEnabled = localStorage.getItem(`item-${item.id}`) === 'true';
        item.isEnabled = isEnabled;
        const buttonClass = isEnabled? 'enabled' : 'disabled';
        const buttonText = isEnabled? 'Full' : 'Avail';
        const itemClass = isEnabled? 'disabled-item' : '';
  
        displayData += `
          <div class="products">
            <div class="content ${item.Day.toLowerCase()} ${itemClass}" style="background-color: ${isEnabled? '#e83131' : ''}">
              <h3 class="Teacher">
              ${item.Teacher}
              </h3>
              <h3 class="Day">
              ${item.Day} 
              </h3>
              <h3 class="Time">
              ${item.Time} 
              </h3>
              ${
                item.Grade?
                `<h3 class="Grade">
                  ${item.Grade}
                </h3>` :
                ''
              }
              ${
                item.Kelas?
                `<h3 class="Kelas">
                  ${item.Kelas}
                </h3>` :
                ''
              }
              <button class="${buttonClass}" data-id="${item.id}">
                ${buttonText}
              </button>
            </div>
          </div>
        `;
      });
      displayData += `</div>`;
    });
  
    productContainer.innerHTML = displayData;
  
    // Add event listener to buttons
    // Add event listener to buttons
    // Function to update button state

    // Add event listener to buttons
    // Add event listener to buttons
    // Function to update button state
    // Function to update button state
    // Function to update button state
    // Function to update button state

    function updateButtonState(button, isEnabled) {
        console.log(`Updating button state: ${isEnabled}`);
        button.textContent = isEnabled ? 'Full' : 'Avail';
        button.classList.toggle('active', isEnabled);
        button.closest('.content').style.backgroundColor = isEnabled ? '#e83131' : '';
        console.log(`Button text: ${button.textContent}`);
        console.log(`Button background color: ${button.closest('.content').style.backgroundColor}`);
    
        const itemElement = button.closest('.content');
        itemElement.classList.toggle('disabled-item', !isEnabled);
        itemElement.style.backgroundColor = isEnabled ? '#e83131' : '';
      
        const teacherElement = itemElement.querySelector('.Teacher');
        const dayElement = itemElement.querySelector('.Day');
        const timeElement = itemElement.querySelector('.Time');
      
        if (isEnabled) {
          teacherElement.style.color = '#fff';
          dayElement.style.color = '#fff';
          timeElement.style.color = '#fff';
          button.style.color =  '#ccc';
          button.style.backgroundColor =  '#666';
        } else {
          teacherElement.style.color = '';
          dayElement.style.color = '';
          timeElement.style.color = '';
          button.style.color =  '#fff';
          button.style.backgroundColor =  '#4CAF50';
        }
      }
      
      // Retrieve state from localStorage and update buttons
      // Retrieve state from localStorage and update buttons
    // Retrieve state from localStorage and update buttons
    const buttons = productContainer.querySelectorAll('button');
    buttons.forEach((button) => {
      const id = button.dataset.id;
      const isEnabled = localStorage.getItem(`item-${id}`) === 'true';
      if (isEnabled === null) { // If item not found in localStorage, set default state to enabled
        isEnabled = true;
        localStorage.setItem(`item-${id}`, isEnabled);
      }
    
      // Add event listener to buttons
      button.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        let isEnabled = e.target.classList.contains('enabled');
      
        // Update isEnabled state
        isEnabled =!isEnabled;
      
        // Update local storage
        localStorage.setItem(`item-${id}`, isEnabled);
      
        // Update button state
        e.target.classList.toggle('enabled', isEnabled);
        e.target.classList.toggle('disabled',!isEnabled);
      
        // Update button text and background color
        updateButtonState(e.target, isEnabled);
      
        // Send socket message
        socket.send(`item-${id}:${isEnabled}`);
      });
    });
    
    // Socket event handler
        socket.onmessage = (event) => {
      const blob = event.data;
      const reader = new FileReader();
      reader.onload = () => {
        const data = reader.result;
        console.log(`Received data: ${data}`);
        const [itemId, isEnabled] = data.split(':');
        console.log(`itemId: ${itemId}, isEnabled: ${isEnabled}`);
        const itemIdWithoutPrefix = itemId.replace('item-', ''); // This will give you "6"
        console.log(`itemIdWithoutPrefix: ${itemIdWithoutPrefix}`); 
    
        // Check if the element exists in the DOM
        console.log(`Checking if element exists...`);
        const elements = document.querySelectorAll(`[data-id="${itemIdWithoutPrefix}"]`);
        console.log(`Elements found: ${elements.length}`);
        console.log(`Elements:`, elements); // Log the elements array to the console
    
        for (const element of elements) {
          console.log(`Element found: ${element}`);
          const isEnabledBool = isEnabled === 'true'; // Convert string to boolean
    
          // Update local storage
          localStorage.setItem(`item-${itemIdWithoutPrefix}`, isEnabledBool);
    
          // Update button state
          updateButtonState(element, isEnabledBool);
        }
      }; 

      reader.readAsText(blob);
    };
  }