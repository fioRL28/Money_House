"use client";

export type ModalMode = "INFO" | "CONFIRM";

export default function Modal({
  open,
  title,
  message,
  confirmText = "Aceptar",
  cancelText = "Cancelar",
  showCancel = false,
  onConfirm,
  onClose,
}: {
  open: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  showCancel?: boolean;
  onConfirm: () => void;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <button
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-label="Cerrar"
      />

      <div className="relative w-[92%] max-w-md rounded-2xl bg-white shadow-xl border p-6">
        <h3 className="text-lg font-extrabold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-700">{message}</p>

        <div className="mt-5 flex justify-end gap-3">
          {showCancel && (
            <button
              onClick={onClose}
              className="rounded-xl border px-4 py-2 font-semibold hover:bg-gray-50"
            >
              {cancelText}
            </button>
          )}

          <button
            onClick={onConfirm}
            className="rounded-xl bg-[#1540b7] px-4 py-2 font-semibold text-white hover:opacity-95"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}