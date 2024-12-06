<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    use HasFactory;

    protected $fillable = [
        'recipient_id', 'foodbank_id', 'thank_you_note', 'rating'
    ];

    // Relationships
    public function recipient()
    {
        return $this->belongsTo(User::class, 'recipient_id');
    }

    public function foodbank()
    {
        return $this->belongsTo(User::class, 'foodbank_id');
    }
}
