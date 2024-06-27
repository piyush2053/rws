import React from "react";
import { SearchIcon, SendIcon, SettingsIcon } from "../Components/SmallChunks/svgs";
import { Button, Textarea } from "flowbite-react";

const GenAI = ()=>{
return(
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div>
            <div className="font-medium">ChatGPT</div>
            <div className="text-sm text-primary-foreground/80">Online</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button >
            <SearchIcon className="w-5 h-5" />
          </Button>
          <Button >
            <SettingsIcon className="w-5 h-5" />
          </Button>
        </div>
      </header>
      <div className="flex-1 overflow-auto p-6 space-y-4">
        <div className="flex items-start gap-4">
          <div className="bg-muted rounded-lg p-4 max-w-[80%]">
            <p>Hi there! Can you explain airplane turbulence to me?</p>
            <div className="text-xs text-muted-foreground mt-2">2:39 PM</div>
          </div>
        </div>
        <div className="flex items-start gap-4 justify-end">
          <div className="bg-primary rounded-lg p-4 max-w-[80%] text-primary-foreground">
            <p>
              Of course! Airplane turbulence happens when the plane encounters pockets of air that are moving
              differently. It's like sailing a boat on choppy water. These air pockets can make the plane feel like it's
              bouncing or shaking a bit. It's completely normal and usually not dangerous at all.
            </p>
            <div className="text-xs text-primary-foreground/80 mt-2">2:40 PM</div>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="bg-muted rounded-lg p-4 max-w-[80%]">
            <p>That makes sense, thank you!</p>
            <div className="text-xs text-muted-foreground mt-2">2:41 PM</div>
          </div>
        </div>
      </div>
      <div className="bg-muted/50 px-6 py-4 flex items-center gap-4">
        <Textarea
          placeholder="Type your message..."
          className="flex-1 rounded-lg bg-background border border-input px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <Button>
          <SendIcon className="w-5 h-5" />
          <span className="sr-only">Send</span>
        </Button>
      </div>
    </div>
)
}

export default GenAI