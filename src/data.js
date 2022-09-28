import { GiDeathSkull} from "react-icons/gi";
import {SiOpenaigym} from 'react-icons/si'

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
    title : "애플 스토어",
     path : "https://apps.apple.com/kr/app/id1515646155",
    Image : require("./images/AppStore.png")

},

{   id : 2,
    icon :<GiDeathSkull/>,
    title : "구글 플레이 스토어",
       path : "https://play.google.com/store/apps/details?id=com.kakaogames.gdtskr",
    Image : require("./images/ggstore.png")

}




]

export const values =[

    {   id : 1,
        icon :<SiOpenaigym/>,
        title : "다양한 영웅",
        desc : " 50명이 넘는 다양한 영웅들을 모으고 성장시키세요! 영웅들의 시너지를 극대화해 최강의 팀을 만드세요!",
        
    
    
    },
    
    {   id : 2,
        icon :<SiOpenaigym/>,
        title : "다양한 맵",
        desc : " 울창한 캔터베리 숲부터, 미스터리한 마법 학교까지 가디언 테일즈에서 다양한 세계를 탐험하세요! 가슴 떨리는 모험과 수많은 친구들과의 인연이 기다리고 있어요!",
    
    
    },
    {   id : 3,
        icon :<SiOpenaigym/>,
        title : "다양한 아이템",
        desc : " 1000여종의 다양한 아이템을 통해 더욱더 강해지세요",
    
    
    },
    
    {   id : 4,
        icon :<SiOpenaigym/>,
        title : "깊은 스토리",
        desc : " 귀여움 속에 감춰진 깊은 스토리를 즐겨보세요",
    
    
    }
    
    
    ]


export const faqs =[


{
    id : 1,
    question :"Q : 영웅 및 장비 소환 확률과 확인할 수 있는 경로가 어떻게 되나요?",
    answer: "많은 기사님들께서 이미 알고 계시겠지만 가디언 테일즈의 영웅 및 장비 소환 확률은 영웅 및 장비 소환 화면에서 [소환 확률] 버튼을 클릭해 확인이 가능합니다.영웅 및 소환 확률은 새로운 영웅이나 장비가 추가되는 경우 업데이트 시점에 갱신이 진행됩니다."
    
    
 },

 {
    id : 2,
    question :"Q : 에픽 전용 장비와 레전드 전용 장비 박스 확률은 어떻게 되나요?",
    answer: "에픽 전용 장비와 레전드 전용 장비 박스 확률은 모두 동일한 확률로 설정되고 박스 명칭에 맞는 등급의 장비만 획득됩니다. 예를 들어 '에픽 전용 장비' 박스를 구매하는 경우 게임 내에 존재하는 에픽 전용 장비가 26개라면 3.846%(100% ÷ 26)이 됩니다."
    
    
},
{
    id : 3,
    question :"Q : 장비의 옵션 변경 확률이 어떻게 되나요?",
    answer: "가디언 테일즈의 옵션 변경 확률은 아래와 같습니다.- 게임 내의 각 옵션의 경우 '최소 수치 ~ 최대 수치'까지 모든 확률이 동일합니다.      (ex : 체력 +3% ~ +12% 까지 옵션 변경이 가능한 경우 +3% ~ +12% 사이 수치가 나올 확률은 모두 동일)  - 보조 옵션이 몇개나 부여될 지에 대한 개별 확률은 대부분 동일하지만, 예외적으로 보조 옵션이 4개 부여되는 장비의 경우, 보조 옵션이 하나만 부여될 확률이 더 낮게 설정되어 있습니다."

},
{
    id : 4,
    question :"Q. 가디언 테일즈에 불리하게 적용되는 변동 확률이 존재하는지와 임의로 변경하는가요?",
    answer: "가디언 테일즈의 확률은 모두 고정된 확률로 적용되고 있습니다. 기사님들께서 간혹 말씀주시는 특정 상황에서 불리하게 적용되는 등의  '변동 확률'은 존재하지 않습니다."  
        
}


]

export const characters = [
{
    id : 1,
    name : "민준",
    quote : "재밌어요",
    job : "개발자" ,
    
},

{
    id : 2,
    name : "민준2",
    quote : "도트 케릭터가 너무 귀엽네여 ",
    job : "빚쟁이" ,
  
},

{
    id : 3,
    name : "민준3",
    quote : "스토리가 너무 마음에 들어요",
    job : "백수" ,
    
},


{
    id : 4,
    name : "민준4",
    quote : "브금이 좋아요",
    job : "트레이너" ,
   
}

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