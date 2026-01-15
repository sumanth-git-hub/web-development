import CompanyInfo from "./components/CompanyInfo"
import IndustryInfo from "./components/IndustryInfo"
import UserInfo from "./components/UserInfo"

const ListItems = [
    {
        id: 1,
        name: 'User Info',
        component: UserInfo,
    },
    {
        id: 2,
        name: 'Company Info',
        component: CompanyInfo
    },
    {
        id: 3,
        name: 'Industry Info',
        component: IndustryInfo
    },
]

export default ListItems