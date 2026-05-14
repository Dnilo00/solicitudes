    const styles = {
    low:    'bg-blue-100 text-blue-800',
    normal: 'bg-green-100 text-green-800',
    high:   'bg-red-100 text-red-800',
    }

    const labels = {
    low:    'Baja',
    normal: 'Normal',
    high:   'Alta',
    }

    export default function PriorityBadge({ priority }) {
    const currentPriority = priority || 'normal';

    return (
        <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${styles[currentPriority] ?? 'bg-gray-100 text-gray-600'}`}>
        {labels[currentPriority] ?? currentPriority}
        </span>
    )
    }