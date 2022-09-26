import { GiDeathSkull} from "react-icons/gi";


export const links = [

{ name : "Home",
  path : '/' 

},

{ name : "About",
  path : '/about' 

},

{ name : "Gallery",
  path : '/gallery' 

},

{ name : "Plans",
  path : '/plans' 

},





{ name : "Contact",
  path : '/contact' 

}


]

export const programs =[

{   id : 1,
    icon :<GiDeathSkull/>,
    title : "program one",
    info : " 대충아무내용",
    path : "http://localhost:3000/plans"


},

{   id : 2,
    icon :<GiDeathSkull/>,
    title : "program two",
    info : " 대충아무내용",
    path : "/programs/111"


},
{   id : 3,
    icon :<GiDeathSkull/>,
    title : "program three",
    info : " 대충아무내용",
    path : "/programs/333"


},

{   id : 4,
    icon :<GiDeathSkull/>,
    title : "program four",
    info : " 대충아무내용",
    path : "/programs/444"


}


]

export const values =[

    {   id : 1,
        icon :<GiDeathSkull/>,
        title : "Value One",
        desc : " 대충아무내용",
        
    
    
    },
    
    {   id : 2,
        icon :<GiDeathSkull/>,
        title : "Value Two",
        desc : " 대충아무내용",
    
    
    },
    {   id : 3,
        icon :<GiDeathSkull/>,
        title : "Value Three",
        desc : " 대충아무내용",
    
    
    },
    
    {   id : 4,
        icon :<GiDeathSkull/>,
        title : "Value Four",
        desc : " 대충아무내용",
    
    
    }
    
    
    ]


export const faqs =[


{
    id : 1,
    question :"대충 아무질문",
    answer: "대충답변 아무답변"
    
    
 },

 {
    id : 2,
    question :"대충 아무질문",
    answer: "대충답변 아무답변"
    
    
},
{
    id : 3,
    question :"대충 아무질문",
    answer: "대충답변 아무답변"
    
    
},
{
    id : 4,
    question :"대충 아무질문",
    answer: "대충답변 아무답변"
    
    
},
{
    id : 5,
    question :"대충 아무질문",
    answer: "대충답변 아무답변"
    
    
},
    
{
    id : 6,
    question :"대충 아무질문",
    answer: "대충답변 아무답변"
    
    
}


]

export const characters = [
{
    id : 1,
    name : "민준",
    quote : "재밌어요",
    job : "개발자" ,
    avater : require("./images/avatar1.png")
},

{
    id : 2,
    name : "민준2",
    quote : "도트 케릭터가 너무 귀엽네여 ",
    job : "빚쟁이" ,
    avater : require("./images/avatar2.png")
},

{
    id : 3,
    name : "민준3",
    quote : "스토리가 너무 마음에 들어요",
    job : "백수" ,
    avater : require("./images/avatar3.png")
},


{
    id : 4,
    name : "민준4",
    quote : "브금이 좋아요",
    job : "트레이너" ,
    avater : require("./images/avatar4.png")
},

]




export const plans = [
    {
        id: 1,
        name: 'Silver 회원',
        desc: '스타터 패키지 ',
        price: "100,000",
        features: [
            {feature: '1일 1회 음료 제공', available: true},
            {feature: '1시간 코칭', available: true},
            {feature: '주 1회 치킨 제공', available: true},
            {feature: '1일 1회 쿠쿠다스제공', available: true},
            {feature: '주 1회 동반 식사', available: true},
            {feature: 'Fifth Feature Plus', available: false},
            {feature: 'Sixth Feature', available: false},
            {feature: 'Seventh Feature', available: false},
            {feature: 'Seventh Feature Plus', available: false},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 2,
        name: 'Gold 회원',
        desc: '스타터 패키지 2',
        price: "200,000",
        features: [
            {feature: '1일 1회 음료 제공', available: true},
            {feature: '1시간 코칭', available: true},
            {feature: '주 1회 치킨 제공', available: true},
            {feature: '1일 1회 쿠쿠다스제공', available: true},
            {feature: '주 1회 동반 식사', available: true},
            {feature: '주 2회 선톡', available: true},
            {feature: '월 1회 음주회식 참여', available: true},
            {feature: '월 1회 콩이 사진 전송', available: true},
            {feature: '월 1회 10분통화', available: true},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 3,
        name: 'Platinum 회원',
        desc: '돈이 남아도는분들을 위한 선택',
        price: "30,000,000",
        features: [
            {feature: '1일 1회 음료 제공', available: true},
            {feature: '1시간 코칭', available: true},
            {feature: '주 1회 치킨 제공', available: true},
            {feature: '1일 1회 쿠쿠다스제공', available: true},
            {feature: '주 1회 동반 식사', available: true},
            {feature: '주 2회 선톡', available: true},
            {feature: '월 1회 음주회식 참여', available: true},
            {feature: '월 1회 콩이 사진 전송', available: true},
            {feature: '월 1회 10분통화', available: true},
            {feature: '1일 1커피 추가 증정', available: true},
            {feature: '천안 숨겨진 맛집 소개', available: true},
            {feature: '롤 라인별 운영법 강좌', available: true},
            {feature: '롤 티어 다이아까지 보장', available: true},
        ]
    },
]








export default links