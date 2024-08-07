'use client'
import { Input } from "@/components/ui/input"
import { SendIcon } from "lucide-react"

const ChatInput = ({ placeholder }) => {
    return (
        <div className="w-full relative">
            <Input placeholder={placeholder} className='py-3' />
            <SendIcon  className="absolute text-black right-4 top-2 cursor-pointer"/>
        </div>
    )
}

export default ChatInput