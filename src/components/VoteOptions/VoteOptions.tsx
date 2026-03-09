import css from './VoteOptions.module.css';

interface VoteOptionsProps {
  onVote: (type: 'good' | 'neutral' | 'bad') => void;
  onReset: () => void;
    canReset: boolean;
}

export const VoteOptions = ({ onVote, onReset, canReset }: VoteOptionsProps) => {
    return (
        <div className={css.container}>
            <button onClick={() => onVote('good')}>Good</button>
            <button onClick={() => onVote('neutral')}>Neutral</button>
            <button onClick={() => onVote('bad')}>Bad</button>
            <button onClick={onReset} disabled={!canReset}>
                Reset
            </button>
        </div>
    );
    };
        

   
