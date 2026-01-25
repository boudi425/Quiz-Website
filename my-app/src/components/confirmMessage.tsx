export default function ConfirmMessage({ Shown, onConfirm, onCancel }: { Shown: boolean, onConfirm: () => void, onCancel: () => void }) {
    if (!Shown) return null;
    return (
        <div className={`${Shown ? "z-50 inset-0 bg-black/90 fixed flex items-center justify-center" : "hidden"}`}>
            <div className="bg-background p-6 rounded-lg shadow-lg">
                <p className="text-lg font-semibold mb-4">Are you sure you want to submit the quiz?</p>
                <div className="flex justify-end gap-2">
                    <button className="cursor-pointer px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400" onClick={onConfirm}>Yes</button>
                    <button className="cursor-pointer px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600" onClick={onCancel}>No</button>
                </div>
            </div>
        </div>
    )
}