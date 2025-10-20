import type { Translation } from "../locales";
import { formatTime } from "../utils/helpers";
import Modal from "./Modal";

export default function VictoryModal({ isOpen, time, moves, t, onClose, onReplay }: {
    isOpen: boolean;
    time: number;
    moves: number;
    t: Translation;
    onClose: () => void;
    onReplay: () => void;
}) {
    return (
        <Modal open={isOpen} onClose={onClose}>
            <div className="modal-success">
                <div className="success-icon">🎉</div>
                <h2>{t.modal.title}</h2>
                <p className="modal-subtitle">{t.modal.subtitle}</p>
                <div className="modal-stats">
                    <div className="modal-stat">
                        <div className="modal-stat-icon">⏱️</div>
                        <div className="modal-stat-value">{formatTime(time)}</div>
                        <div className="modal-stat-label">{t.stats.time}</div>
                    </div>
                    <div className="modal-stat">
                        <div className="modal-stat-icon">🎯</div>
                        <div className="modal-stat-value">{moves}</div>
                        <div className="modal-stat-label">{t.stats.moves}</div>
                    </div>
                </div>
                <button onClick={onReplay} className="modal-btn">
                    {t.modal.replay}
                </button>
            </div>
        </Modal>
    )
}