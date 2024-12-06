<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Request extends Model
{
    use HasFactory;

    protected $fillable = [
        'foodbank_id', 'type', 'quantity'
    ];

    // Relationship
    public function foodbank()
    {
        return $this->belongsTo(User::class, 'foodbank_id');
    }
}
