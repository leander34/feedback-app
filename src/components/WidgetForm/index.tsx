import { useState } from "react";
import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Image de um inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Image de uma lãmpada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Image de um balão de pensamentos'
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes
export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<null | FeedbackType>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)

    function handleRestartFeedback() {
        setFeedbackSent(false)
        setFeedbackType(null)
    }
    
    return (
        <div className="bg-zinc-900 p-4 relative flex flex-col items-center rounded-2xl mb-4 shadow-lg w-[calc(100vw-2rem)] md:w-auto">
 
            {feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
            ) : (
                <>
                  {!feedbackType ? (
                    <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
                   ) : (
                    <FeedbackContentStep 
                    onFeedbackRestartRequested={handleRestartFeedback}
                    feedbackType={feedbackType}
                    onFeedbackSent={() => setFeedbackSent(true)}
                    />
                  )}
                </>
            )}
            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="http://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    )
 }