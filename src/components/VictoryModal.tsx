import { formatTime } from "../utils/helpers";
import Modal from "./Modal";

export default function VictoryModal({ isOpen, time, moves, onClose, onReplay }: {
    isOpen: boolean;
    time: number;
    moves: number;
    onClose: () => void;
    onReplay: () => void;
}) {
    return (
        <Modal open={isOpen} onClose={onClose}>
            <div className="modal-success">
                <div className="success-icon">🎉</div>
                <h2>Game over!</h2>
                <p className="modal-subtitle">Excellent work</p>
                <div className="modal-stats">
                    <div className="modal-stat">
                        <div className="modal-stat-icon">⏱️</div>
                        <div className="modal-stat-value">{formatTime(time)}</div>
                        <div className="modal-stat-label">Time</div>
                    </div>
                    <div className="modal-stat">
                        <div className="modal-stat-icon">🎯</div>
                        <div className="modal-stat-value">{moves}</div>
                        <div className="modal-stat-label">Blows</div>
                    </div>
                </div>
                <button onClick={onReplay} className="modal-btn">
                    Replay
                </button>
            </div>
        </Modal>
    )
}