import ScheduleSend from '../view/ScheduleSend.vue'
import MessageContents from '../view/MessageContents.vue'
import SegmentList from '../view/SegmentList.vue'
import ChatBox from '../view/ChatBox.vue'
import MessageCreate from '../view/MessageCreate.vue'
import MainPage from '../view/MainPage.vue'
import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "MainPage",
        component: MainPage,
        children: [
            {
                path: "schedule-send",
                name: "ScheduleSend",
                component: ScheduleSend
            },
            { 
                path: "message-contents", 
                name: "MessageContents", 
                component: MessageContents
            },
            { 
                path: "segment-list", 
                name: "SegmentList", 
                component: SegmentList
            },
            { 
                path: "chat-box", 
                name: "ChatBox", 
                component: ChatBox
            }, 
            {
                path: "message-create", 
                name: "MessageCreate", 
                component: MessageCreate
            }
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router