import { Link } from '@tanstack/react-router';
import { LockKeyhole, SearchX, TriangleAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
export function PrivateState({ type, onRetry }: { type: 'login' | 'empty' | 'error'; onRetry?: () => void }) {
 const Icon = type === 'login' ? LockKeyhole : type === 'empty' ? SearchX : TriangleAlert;
 return <div className="private-state"><span className="state-icon"><Icon size={23}/></span><h3>{type === 'login' ? 'Ma’lumotlaringiz himoyalangan' : type === 'empty' ? 'Hozircha amaliyot ma’lumotlari mavjud emas' : 'Ma’lumotni yuklashda xatolik yuz berdi'}</h3><p>{type === 'login' ? 'O‘zingizga tegishli amaliyot yozuvlarini ko‘rish uchun tizimga kiring.' : type === 'empty' ? 'Amaliyot biriktirilgach, ma’lumotlar shu yerda ko‘rinadi.' : 'Birozdan keyin qayta urinib ko‘ring.'}</p>{type === 'login' ? <Button asChild><Link to="/login">Platformaga kirish</Link></Button> : type === 'error' ? <Button onClick={onRetry}>Qayta urinish</Button> : null}</div>;
}
